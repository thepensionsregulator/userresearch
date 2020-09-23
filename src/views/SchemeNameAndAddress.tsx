import React, { useState, useContext, useEffect } from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, H4, Flex } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';
import { Link, useHistory } from 'react-router-dom';
import { ArrowLink } from '@tpr/layout';
import { Form, FieldProps, renderFields } from '@tpr/forms';
import ScrollToTop from '../components/ScrollToTop';
import StateContext from '../StateContext';
import SidebarContext from '../components/SidebarContext';
import AddressConfirmation from '../components/AddressForm/AddressConfirmation';
import AddressSelect from '../components/AddressForm/AddressSelect';
import PostcodeSearch from '../components/AddressForm/PostcodeSearch';

const SchemeNameAndAddress = () => {
  const appState = useContext(StateContext);
  const history = useHistory();

  const [step, setStep] = useState<
    'addressConfirmation' | 'selectAddress' | 'postcodeSearch'
  >('addressConfirmation');

  const DisplayForm = (pristine: boolean) => {
    switch (step) {
      case 'addressConfirmation':
        return (
          <AddressConfirmation
            address={{
              addressLine1: appState.schemeAddress.addressLine1,
              addressLine2: appState.schemeAddress.addressLine2,
              addressLine3: appState.schemeAddress.addressLine3,
              postTown: appState.schemeAddress.postTown,
              county: appState.schemeAddress.county,
              postcode: appState.schemeAddress.postcode,
              country: appState.schemeAddress.country,
              countryId: appState.schemeAddress.countryId,
            }}
            changeAddress={() => setStep('postcodeSearch')}
          />
        );
      case 'selectAddress':
        return (
          <AddressSelect
            postcode={appState.schemeAddress.postcode}
            changePostcode={() => {
              setStep('postcodeSearch');
            }}
            isPristine={pristine}
          />
        );
      case 'postcodeSearch':
        return <PostcodeSearch />;
      default:
        console.warn('Invalid step');
        break;
    }
  };

  const schemeName: FieldProps[] = [
    {
      type: 'text',
      name: 'schemeName',
      inputWidth: 5,
      label: 'Scheme name',
      validate: (value) => {
        if (!value) {
          return 'Scheme name required';
        }
      },
    },
  ];

  const { dispatch } = useContext(SidebarContext);

  const submitAddressConfirmation = (values: any) => {
    appState.setSchemeAddress({
      ...appState.schemeAddress,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
    });
    appState.setSchemeName(values.schemeName);
    dispatch({ type: 'COMPLETE', index: 0 });
    history.push('/scheme-status-and-membership');
  };

  const submitAddressSelect = (values: any) => {
    appState.setSchemeAddress({
      ...values.addressSelect.value,
    });
    setStep('addressConfirmation');
  };

  const submitPostcodeSearch = (values: any) => {
    setStep('selectAddress');
  };

  const onSubmit = (values: any) => {
    switch (step) {
      case 'addressConfirmation':
        return submitAddressConfirmation(values);
      case 'postcodeSearch':
        return submitPostcodeSearch(values);
      case 'selectAddress':
        return submitAddressSelect(values);
      default:
        console.warn('invalid step');
        break;
    }
  };

  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <Link to="/">
          <ArrowLink
            onClick={() => {}}
            pointsTo="left"
            iconSide="left"
            cfg={{ mt: 3 }}
          />
        </Link>
        <H1 cfg={{ mt: 6, mb: 2 }}>Scheme name and address</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <Form
          onSubmit={(values: any) => onSubmit(values)}
          initialValues={{
            schemeName: appState.schemeName,
            addressLine1: appState.schemeAddress.addressLine1,
            addressLine2: appState.schemeAddress.addressLine2,
            postcodeSearch: appState.schemeAddress.postcode,
          }}
        >
          {({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Flex cfg={{ flexDirection: 'column', mb: 3 }}>
                <P cfg={{ mb: 4 }}>
                  These are the scheme details currently held by the regulator.
                  Correct any details as necessary.
                </P>
                {renderFields(schemeName)}
                <P cfg={{ my: 2 }}>
                  This needs to be the full name of the pension scheme, as
                  written out in the trust deed or any other amending documents
                  which may have changed the scheme name. Please don't include
                  any scheme reference numbers as part of the scheme name.
                </P>
              </Flex>
              <Flex cfg={{ mb: 4, flexDirection: 'column' }}>
                <H4 cfg={{ mb: 1 }}>Scheme correspondence address</H4>
                <P cfg={{ mb: 2 }}>
                  We'll use this address when we need to get in touch with the
                  scheme trustee(s).
                </P>
                {DisplayForm(pristine)}
              </Flex>
            </form>
          )}
        </Form>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default SchemeNameAndAddress;
