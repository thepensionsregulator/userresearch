import React, { useState } from 'react';
import Styles from '../Layout.module.scss';
import { ArrowLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H3, H1, Hr } from '@tpr/core';
import { Form, FieldProps } from '@tpr/forms';
import ScrollToTop from '../../components/ScrollToTop';
import PostcodeSearch from '../AddressForm/PostcodeSearch';
import AddressSelect from '../AddressForm/AddressSelect';
import AddressConfirmation from '../AddressForm/AddressConfirmation';

export const AddressContext = React.createContext({});

const IndividualTrusteeStepThree = (props: any) => {
  const history = useHistory();

  const fields: FieldProps[] = [
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine1',
      label: 'Address line 1',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter address line 1';
      },
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine2',
      label: 'Address line 2',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine3',
      label: 'Address line 3',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'postTown',
      label: 'Post town',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter post town';
      },
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'county',
      label: 'County',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'postcode',
      label: 'Post code',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter postcode';
      },
    },
  ];

  const postCode: FieldProps[] = [
    {
      type: 'text',
      name: 'postcode',
      label: 'Postcode',
      inputWidth: 2,
      validate: (value) => {
        if (!value) return 'Enter a postcode';
      },
      cfg: { py: 3, my: 2 },
    },
  ];

  const addressSelect: FieldProps[] = [
    {
      name: 'addressSelect',
      type: 'select',
      label: 'Address',
      options: [
        {
          label: 'The Pensions Regulator, Napier House, Trafalgar Place',
          value: {
            addressLine1: 'The Pensions Regulator',
            addressLine2: 'Napier House',
            addressLine3: 'Trafalgar Place',
            postTown: 'Brighton',
            postcode: 'BN1 4AA',
            county: 'East Sussex',
          },
        },
      ],
    },
  ];

  const [step, setStep] = useState<'step-0' | 'step-1' | 'step-2'>('step-0');

  const DisplayForm = () => {
    switch (step) {
      case 'step-0':
        return (
          <PostcodeSearch
            nextStep={() => setStep('step-1')}
            postcode="CM12 0AG"
          />
        );

      case 'step-1':
        return (
          <AddressSelect
            prevStep={() => setStep('step-0')}
            nextStep={() => setStep('step-2')}
          />
        );

      case 'step-2':
        return <AddressConfirmation firstStep={() => setStep('step-0')} />;
      default:
        console.warn('Invalid step');
        break;
    }
  };

  const onSubmit = (values: any) => {
    props.setNewTrustee({ ...props.newTrustee, ...values });
    props.nextPage();
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
      <Form
        onSubmit={() => {
          console.log('submitting');
        }}
      >
        {() => DisplayForm()}
      </Form>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepThree;
