import React from 'react';
import Styles from './Layout.module.scss';
import { H1 } from '@tpr/core';

import UserResearchSidebar from '../components/UserResearchSidebar';

const SchemeNameAndAddress = () => {
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <H1>Scheme name and address</H1>
      </div>
    </div>
  );
};

export default SchemeNameAndAddress;
