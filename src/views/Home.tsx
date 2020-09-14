import React from 'react';
import { H1, Hr, H2, P } from '@tpr/core';
import { Info } from '@tpr/layout';
import Styles from './Layout.module.scss';
import ScrollToTop from '../components/ScrollToTop';
import UserResearchSidebar from '../components/UserResearchSidebar';

const HomePage = () => (
  <div className={Styles.root}>
    <UserResearchSidebar />
    <div className={Styles.main}>
      <H1 cfg={{ mb: 6 }}>Scheme Return</H1>
      <Hr cfg={{ mb: 10 }} />
      <Info title="Due Date" importantMessage="Important">
        <P cfg={{ mb: 1 }}>The scheme return for this scheme is due.</P>
        <P cfg={{ mt: 2 }}>
          You must submit the completed scheme return by
          <P tag="b"> 31 October 2020</P>.
        </P>
      </Info>
      <Hr cfg={{ mt: 6 }} />
      <H2 cfg={{ mt: 9 }}>Before you start</H2>
      <P cfg={{ my: 4 }}>
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
      <ScrollToTop />
    </div>
  </div>
);

export default HomePage;
