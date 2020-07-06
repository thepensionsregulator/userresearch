import React from 'react';
import { H1, Hr, H2, P } from '@tpr/core';
import { Sidebar, Info } from '@tpr/layout';
import Styles from './Layout.module.scss';

const HomePage = () => (
  <div className={Styles.root}>
    <div className={Styles.sidebar}>
      <Sidebar />
    </div>
    <div className={Styles.main}>
      <H1>Scheme Return</H1>
      <Hr cfg={{ my: 5 }} />
      <Info title="Due Date" importantMessage="Important">
        The scheme return for this scheme is due. <br /> You must submit the
        completed scheme return by 31 March 2021.
      </Info>
      <Hr cfg={{ my: 5 }} />
      <H2>Before you start</H2>
      <P cfg={{ my: 3 }}>
        Make sure you have the following information to hand:
      </P>
      <ul className={Styles.list}>
        <li>number of members in the scheme</li>
        <li>
          any change to the name or contact details of the trustees, employer,
          service providers or scheme return contact
        </li>
        <li>
          charity or company name, Companies House number or registered charity
          number (for employer and trustees)
        </li>
      </ul>
      <Hr cfg={{ my: 5 }} />
    </div>
  </div>
);

export default HomePage;
