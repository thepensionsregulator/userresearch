import React, { useState } from 'react';
import Styles from './Layout.module.scss';
import UserResearchSidebar from '../components/UserResearchSidebar';
import IndividualTrusteeStepFour from './AddIndividualTrustee/IndividualTrusteeStepFour';
import IndividualTrusteeStepOne from './AddIndividualTrustee/IndividualTrusteeStepOne';
import IndividualTrusteeStepTwo from './AddIndividualTrustee/IndividualTrusteeStepTwo';
import IndividualTrusteeStepThree from './AddIndividualTrustee/IndividualTrusteeStepThree';
import IndividualTrusteeStepZero from './AddIndividualTrustee/IndividualTrusteeStepZero';

const AddTrustee = () => {
  const [state, setState] = useState<
    'step-0' | 'step-1' | 'step-2' | 'step-3' | 'step-4'
  >('step-0');

  const renderForm = () => {
    switch (state) {
      case 'step-0':
        return (
          <IndividualTrusteeStepZero onSubmit={() => setState('step-1')} />
        );
      case 'step-1':
        return <IndividualTrusteeStepOne onSubmit={() => setState('step-2')} />;
      case 'step-2':
        return <IndividualTrusteeStepTwo onSubmit={() => setState('step-3')} />;
      case 'step-3':
        return (
          <IndividualTrusteeStepThree onSubmit={() => setState('step-4')} />
        );
      case 'step-4':
        return <IndividualTrusteeStepFour />;
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
