import React from 'react';
import Styles from './Layout.module.scss';
import { H1, H4, P, Hr, Link } from '@tpr/core';
import { Info, ArrowButton, ArrowLink } from '@tpr/layout';

const WoundUpConfirmation = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.main}>
        <ArrowLink
          iconSide="left"
          pointsTo="left"
          onClick={() => console.log('Click')}
          cfg={{ mb: 3 }}
        />
        <Info>
          <H1>Scheme wound up confirmed</H1>
          <P>
            You confirmed on <b>9 July 2020</b> that your scheme has now wound
            up.
          </P>
          <P>Thank you for your time and co-operation.</P>
        </Info>
        <div>
          <ArrowButton
            title="Return to My Schemes"
            iconSide="right"
            pointsTo="right"
            cfg={{ mr: 4, mt: 7 }}
          ></ArrowButton>
        </div>
        <Hr cfg={{ my: 4 }} />
        <div className={Styles.backToTop}>
          <ArrowLink
            iconSide="left"
            pointsTo="up"
            onClick={() => console.log('clicked')}
            cfg={{ mr: 3 }}
            title="Back to top"
          />
        </div>
      </div>
    </div>
  );
};

export default WoundUpConfirmation;
