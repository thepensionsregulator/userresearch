import React from 'react';
import Styles from './Layout.module.scss';
import { H1 } from '@tpr/core';

const WoundUpConfirmation = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.main}>
        <H1>Scheme Wound Up Confirmation</H1>
      </div>
    </div>
  );
};

export default WoundUpConfirmation;
