import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Styles from '../Layout.module.scss';
import { ArrowLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H3, H1, Hr } from '@tpr/core';
import ScrollToTop from '../../components/ScrollToTop';
import PostcodeSearch from '../../components/AddressForm/PostcodeSearch';
import AddressSelect from '../../components/AddressForm/AddressSelect';
import AddressConfirmation from '../../components/AddressForm/AddressConfirmation';
import AddressProvider from '../../components/AddressForm/AddressProvider';
import { CardAddress } from '@tpr/layout/lib/components/cards/common/interfaces';
import { Form } from '@tpr/forms';
import { Trustee } from '@tpr/layout/lib/components/cards/trustee/context';

const IndividualTrusteeStepThree = (props: {
  newTrustee: Trustee;
  setNewTrustee: Dispatch<SetStateAction<Trustee>>;
  nextPage: () => void;
}) => {
  const history = useHistory();

  const [step, setStep] = useState<
    'postcodeSearch' | 'selectAddress' | 'confirmAddress'
  >('postcodeSearch');

  const [address, setAddress] = useState<CardAddress>();

  const DisplayForm = (pristine: boolean) => {
    switch (step) {
      case 'postcodeSearch':
        return (
          <PostcodeSearch
            text={"Enter the postcode of the trustee's address"}
          />
        );

      case 'selectAddress':
        return (
          <AddressSelect
            postcode={address.postcode}
            isPristine={pristine}
            changePostcode={() => setStep('postcodeSearch')}
          />
        );

      case 'confirmAddress':
        return (
          <AddressConfirmation
            address={{
              addressLine1: address.addressLine1,
              addressLine2: address.addressLine2,
              addressLine3: address.addressLine3,
              postTown: address.postTown,
              county: address.county,
              postcode: address.postcode,
              country: address.country,
              countryId: address.countryId,
            }}
            changeAddress={() => {
              setStep('postcodeSearch');
            }}
          />
        );
      default:
        console.warn('Invalid step');
        break;
    }
  };

  const onPostCodeSearchSubmit = (values: any) => {
    setAddress({ ...address, postcode: values.postcodeSearch });
    setStep('selectAddress');
  };

  const onAddressSelectSubmit = (values: any) => {
    setAddress({ ...values.addressSelect.value });
    setStep('confirmAddress');
  };

  const onAddressConfirmationSubmit = (values: any) => {
    console.log('onAddressConfirmationSubmit values');
    console.log(values);
    props.setNewTrustee({
      ...props.newTrustee,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      addressLine3: address.addressLine3,
      postTown: address.postTown,
      postcode: address.postcode,
      county: address.county,
      country: address.country,
      countryId: address.countryId,
    });
    props.nextPage();
  };

  const submit = (values: any) => {
    switch (step) {
      case 'postcodeSearch':
        return onPostCodeSearchSubmit(values);
      case 'selectAddress':
        return onAddressSelectSubmit(values);
      case 'confirmAddress':
        return onAddressConfirmationSubmit(values);
      default:
        console.warn('Invalid step');
        break;
    }
  };

  return (
    <div className={Styles.main}>
      <ArrowLink
        pointsTo="left"
        iconSide="left"
        title="Back"
        onClick={() => history.goBack()}
        cfg={{ mt: 3 }}
      />
      <H3 cfg={{ mt: 2 }}>Add trustee: Individual</H3>
      <H1 cfg={{ mt: 2, mb: 3 }}>What is this trustee's address?</H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />

      <AddressProvider>
        <Form
          onSubmit={submit}
          initialValues={{
            addressLine1: address?.addressLine1,
            addressLine2: address?.addressLine2,
          }}
        >
          {({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>{DisplayForm(pristine)}</form>
          )}
        </Form>
      </AddressProvider>

      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepThree;
