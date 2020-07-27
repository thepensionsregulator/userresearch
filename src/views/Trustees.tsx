import React from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, Flex } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';

const Trustees = () => {
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <H1 cfg={{ mb: 2 }}>Trustee Details</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <P>
          The following is a list of the trustees we hold for the scheme. It is
          important that our records match the scheme records.
        </P>
        <Flex cfg={{ p: 4, bg: 'neutral.1' }}>
          <P>Total Number of Trustees: 1</P>
        </Flex>
      </div>
    </div>
  );
};

export default Trustees;
