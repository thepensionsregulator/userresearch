import React from 'react';
import Styles from './Layout.module.scss';
import { H1, H2, P, Hr, Link } from '@tpr/core';
import { Info, ArrowButton, ArrowLink } from '@tpr/layout';

const WoundUpConfirmation = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.main}>
        <Info>
          <H1>Scheme return complete</H1>
          <P>
            You successfully submitted your scheme return to The Pensions
            Regulator on <b>3 January 2020</b>.
          </P>
          <P>Thank you for your time and co-operation.</P>
        </Info>
        <div>
          <ArrowButton
            title="Return to Scheme options"
            iconSide="right"
            pointsTo="right"
            cfg={{ mr: 4 }}
          ></ArrowButton>
          <Link underline>Download and print options</Link>
        </div>
        <Hr />
        <H2>What happens next</H2>
        <P>
          It is the trustee's responsibility to inform The Pensions Regulator of
          any changes to scheme information.
        </P>
        <P>
          In the past, you may have used form PR10 to let us know of any
          changes, for example:
        </P>
        <ul>
          <li>changes to the name and/or address of the scheme;</li>
          <li>change of employer or trustee;</li>
          <li>change to the scheme's status; or</li>
          <li>change to the number of scheme members.</li>
        </ul>
        <P>
          However, you can now access this online scheme maintenance system at
          any time, enabling you to update your scheme information with changes
          as and when they happen. You no longer need to complete a form PR10.
        </P>
        <Hr />
        <div>
          <Link>What did you think of this service?</Link>
          <P>(takes 30 seconds)</P>
        </div>
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
