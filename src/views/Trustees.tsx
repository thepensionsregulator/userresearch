import React, { useState } from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, Flex, H2 } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';
import AddTrusteeLink from '../components/AddTrusteeLink';
import { TrusteeCard, ArrowButton } from '@tpr/layout';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import { Form } from '@tpr/forms';
import ScrollToTop from '../components/ScrollToTop';
import TrusteeRepository from '../services/TrusteeRepository';
import { TrusteeProps } from '@tpr/layout/lib/components/cards/trustee/trusteeMachine';
import { useHistory } from 'react-router-dom';
const Trustees = () => {
  const onSubmit = (values: any) => {
    console.log('Submitting form');
  };

  const history = useHistory();

  const complete = false; // Will need to be changed to useState(false) to implement the 'correct' functionality
  const [trustees, setTrustees] = useState(TrusteeRepository.GetAllTrustees());
  const [correctTrusteeDetails, setCorrectTrusteeDetails] = useState(0);

  const callAddressAPI = (endpoint: string) => {
    const results = Promise.resolve({
      data: {
        results: [
          {
            format: 'https://SomeFakeApi124a.dev/v2/someFakeEndpoint1',
          },
        ],
        address: [
          { addressLine1: 'The Pensions Regulator' },
          { addressLine2: 'Napier House' },
          { addressLine3: 'Trafalgar Place' },
          { locality: 'Brighton' },
          { province: 'East Sussex' },
          { postalCode: 'BN1 4DW' },
          { country: '' },
        ],
      },
    });
    return results;
  };

  const removeTrustee = (formValues: any, trusteeToRemove: TrusteeInput) => {
    TrusteeRepository.RemoveTrustee(trusteeToRemove);
    setTrustees([...TrusteeRepository.GetAllTrustees()]);
    history.push({ search: 'state=trustee-removed' });
    return Promise.resolve();
  };

  const updateTrustee = (formValues: any, trusteeToUpdate: TrusteeProps) => {
    TrusteeRepository.UpdateTrustee(trusteeToUpdate);
    setTrustees([...TrusteeRepository.GetAllTrustees()]);
    return Promise.resolve();
  };

  const updateDetails = (formValues: any, trusteeToUpdate: TrusteeProps) => {
    const result = updateTrustee(formValues, trusteeToUpdate);
    history.push({ search: 'state=trustee-details-edit' });
    return result;
  };

  const updateContact = (formValues: any, trusteeToUpdate: TrusteeProps) => {
    const result = updateTrustee(formValues, trusteeToUpdate);
    history.push({ search: 'state=trustee-contacts-edit' });
    return result;
  };

  const updateAddress = (formValues: any, trusteeToUpdate: TrusteeProps) => {
    const result = updateTrustee(formValues, trusteeToUpdate);
    history.push({ search: 'state=trustee-address-edit' });
    return result;
  };

  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <H1 cfg={{ mb: 2 }}>Trustee Details</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <P cfg={{ mb: 3 }}>
          The following is a list of the trustees we hold for the scheme. Check,
          amend and add trustees as necessary.
        </P>
        <Flex cfg={{ p: 4, bg: 'neutral.3', justifyContent: 'space-between' }}>
          <P>Total Number of Trustees: {trustees.length}</P>
          <AddTrusteeLink />
        </Flex>
        <H2 cfg={{ mt: 2, mb: 2 }}>Trustees</H2>
        {trustees.map((trustee) => (
          <TrusteeCard
            key={trustee.schemeRoleId.toString()}
            onDetailsSave={updateDetails}
            onContactSave={updateContact}
            onAddressSave={updateAddress}
            onRemove={removeTrustee}
            onCorrect={(value: boolean) => {
              if (value) {
                setCorrectTrusteeDetails(correctTrusteeDetails + 1);
              } else {
                setCorrectTrusteeDetails(correctTrusteeDetails - 1);
              }
            }}
            addressAPI={{
              get: (endpoint: any) => callAddressAPI(endpoint),
              limit: 100,
            }}
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
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ArrowButton
                type="submit"
                pointsTo="right"
                iconSide="right"
                title="Save and Continue"
                disabled={!(correctTrusteeDetails === trustees.length)}
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
