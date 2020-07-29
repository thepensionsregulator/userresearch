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

  const callBackFn = (values: any, fullTrusteeObject: TrusteeProps) => {
    console.log(values);
    return Promise.resolve();
  };

  const someMethod = (a: any) => {
    console.log('Some method called');
    return Promise.resolve();
  };

  const trustees: TrusteeInput[] = TrusteeRepository.GetAllTrustees();

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
          <P>Total Number of Trustees: 1</P>
          <AddTrusteeLink />
        </Flex>
        <H2 cfg={{ mt: 2, mb: 2 }}>Trustees</H2>
        <Trustee
          onDetailsSave={callBackFn}
          onContactSave={callBackFn}
          onAddressSave={callBackFn}
          onRemove={callBackFn}
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
          trustee={trustees[0]}
          cfg={{ mb: 6 }}
        />
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
