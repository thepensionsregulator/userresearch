import React from 'react';
import { H1, Hr, H2, P, Flex, Link } from '@tpr/core';
import { ArrowButton, ArrowLink, Info } from '@tpr/layout';
import Styles from './Layout.module.scss';
import ScrollToTop from '../components/ScrollToTop';
import UserResearchSidebar from '../components/UserResearchSidebar';
import { Link as RouterLink } from 'react-router-dom';
import UL from '../components/UL';

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
      <Flex cfg={{ my: 6 }}>
        <RouterLink to="/scheme-name-and-address">
          <ArrowButton
            title="Start"
            pointsTo="right"
            iconSide="right"
            cfg={{ mr: 3 }}
          />
        </RouterLink>
        <ArrowLink
          title="View current and previous scheme returns"
          pointsTo="right"
          iconSide="right"
          onClick={() => {
            console.log('redirecting to Documents available page');
          }}
        />
      </Flex>
      <Hr cfg={{ mt: 6 }} />
      <H2 cfg={{ mt: 9 }}>Before you start</H2>
      <P cfg={{ mt: 4 }}>
        Make sure you have the following information to hand:
      </P>
      <UL
        listItems={[
          'scheme trust deed and rules',
          'last actuarial valuation',
          'most recent report and scheme accounts',
          <div>
            <Link underline onClick={() => console.log('handling on click')}>
              DB return scheme checklist
            </Link>{' '}
            {'(opens in a new window)'}
          </div>,
        ]}
      />
      <P cfg={{ mt: 4 }}>
        Check if there are any changes to the names or contact details of:
      </P>
      <UL
        listItems={[
          'trustees',
          'employers',
          'service providers',
          'scheme return contracts',
        ]}
      />
      <Hr cfg={{ my: 5 }} />
      <ScrollToTop />
    </div>
  </div>
);

export default HomePage;
