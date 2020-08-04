import React, { useState } from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, Flex, H2 } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';
import AddTrusteeLink from '../components/AddTrusteeLink';
import { Trustee, ArrowButton } from '@tpr/layout';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import { Form } from '@tpr/forms';
import ScrollToTop from '../components/ScrollToTop';
import TrusteeRepository from '../services/TrusteeRepository';
import { TrusteeProps } from '@tpr/layout/lib/components/cards/trustee/trusteeMachine';
const Trustees = () => {
  const submit = () => {
    console.log('Submitting form');
  };

  const [complete, setComplete] = useState(false);
  const [trustees, setTrustees] = useState(TrusteeRepository.GetAllTrustees());

  const someMethod = (a: any) => {
    console.log('Some method called');
    return Promise.resolve();
  };

  const removeTrustee = (formValues: any, trusteeToRemove: TrusteeInput) => {
    TrusteeRepository.RemoveTrustee(trusteeToRemove);
    const trusteesFromRepo = TrusteeRepository.GetAllTrustees();
    setTrustees([...trusteesFromRepo]);
    return Promise.resolve();
  };

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
        <Flex cfg={{ p: 4, bg: 'neutral.1', justifyContent: 'space-between' }}>
          <P>Total Number of Trustees: {trustees.length}</P>
          <AddTrusteeLink />
        </Flex>
        <H2 cfg={{ mt: 2, mb: 2 }}>Trustees</H2>
        {trustees.map((trustee) => (
          <Trustee
            key={trustee.schemeRoleId.toString()}
            onDetailsSave={(formValues: any, trusteeToRemove: TrusteeProps) => {
              console.log(formValues);
              console.log(trusteeToRemove);
              return Promise.resolve();
            }}
            onContactSave={(formValues: any, trusteeToRemove: TrusteeProps) => {
              console.log(formValues);
              console.log(trusteeToRemove);
              return Promise.resolve();
            }}
            onAddressSave={(formValues: any, trusteeToRemove: TrusteeProps) => {
              console.log(formValues);
              console.log(trusteeToRemove);
              return Promise.resolve();
            }}
            onRemove={removeTrustee}
            onCorrect={(value) => setComplete(value)}
            addressAPI={{ get: (endpoint) => someMethod(endpoint), limit: 100 }}
            complete={complete}
            i18n={{
              preview: {
                buttons: {
                  one: 'Trustee',
                  two: 'Remove',
                  three: 'Correspondence address',
                  four: 'Contact details',
                },
                checkboxLabel: 'All details are correct',
              },
            }}
            trustee={trustee}
            cfg={{ mb: 6 }}
          />
        ))}
        <Flex cfg={{ justifyContent: 'flex-end' }}>
          <AddTrusteeLink />
        </Flex>
        <Hr cfg={{ mb: 8 }} />
        <Form onSubmit={submit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ArrowButton
                type="submit"
                pointsTo="right"
                iconSide="right"
                title="Save and Continue"
              />
            </form>
          )}
        </Form>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Trustees;
