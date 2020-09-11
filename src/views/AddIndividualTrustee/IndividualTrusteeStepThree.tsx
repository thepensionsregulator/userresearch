import React, { useState } from 'react';
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

const IndividualTrusteeStepThree = (props: any) => {
  const history = useHistory();

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
        return (
          <AddressConfirmation
            firstStep={() => setStep('step-0')}
            nextStep={() => {
              props.nextPage();
            }}
            saveAddress={(address: CardAddress) => {
              props.setNewTrustee({ ...props.newTrustee, ...address });
            }}
          />
        );
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

      <AddressProvider>{DisplayForm()}</AddressProvider>

      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepThree;
