import React from 'react';
import Styles from '../Layout.module.scss';
import UserResearchSidebar from '../../components/UserResearchSidebar';
import { ArrowLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H3 } from '@tpr/core';

const IndividualTrusteeStepThree = () => {
  const history = useHistory();
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <ArrowLink
          pointsTo="left"
          iconSide="left"
          title="Back"
          onClick={() => history.goBack()}
        />
        <H3>Add trustee: Individual</H3>
      </div>
    </div>
  );
};

export default IndividualTrusteeStepThree;
