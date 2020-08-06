import React, { useState } from 'react';
import Styles from './Layout.module.scss';
import UserResearchSidebar from '../components/UserResearchSidebar';
import IndividualTrusteeStepFour from './AddIndividualTrustee/IndividualTrusteeStepFour';
import IndividualTrusteeStepOne from './AddIndividualTrustee/IndividualTrusteeStepOne';
import IndividualTrusteeStepTwo from './AddIndividualTrustee/IndividualTrusteeStepTwo';
import IndividualTrusteeStepThree from './AddIndividualTrustee/IndividualTrusteeStepThree';
import IndividualTrusteeStepZero from './AddIndividualTrustee/IndividualTrusteeStepZero';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';

const AddTrustee = () => {
  const [state, setState] = useState<
    'step-0' | 'step-1' | 'step-2' | 'step-3' | 'step-4'
  >('step-0');

  const [newTrustee, setNewTrustee] = useState<TrusteeInput>();

  const renderForm = () => {
    switch (state) {
      case 'step-0':
        return (
          <IndividualTrusteeStepZero
            nextPage={() => setState('step-1')}
            newTrustee={newTrustee}
            setNewTrustee={setNewTrustee}
          />
        );
      case 'step-1':
        return (
          <IndividualTrusteeStepOne
            nextPage={() => setState('step-2')}
            setNewTrustee={setNewTrustee}
            newTrustee={newTrustee}
          />
        );
      case 'step-2':
        return (
          <IndividualTrusteeStepTwo
            nextPage={() => setState('step-3')}
            setNewTrustee={setNewTrustee}
            newTrustee={newTrustee}
          />
        );
      case 'step-3':
        return (
          <IndividualTrusteeStepThree
            nextPage={() => setState('step-4')}
            setNewTrustee={setNewTrustee}
            newTrustee={newTrustee}
          />
        );
      case 'step-4':
        return (
          <IndividualTrusteeStepFour
            setNewTrustee={setNewTrustee}
            newTrustee={newTrustee}
          />
        );
    }
  };
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      {renderForm()}
    </div>
  );
};

export default AddTrustee;
