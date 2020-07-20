import React from 'react';
import { DocWidth, H1, Hr, P, H2, AppWidth } from '@tpr/core';
import Styles from './Layout.module.scss';
import { Sidebar, ArrowLink } from '@tpr/layout';
import { Form, renderFields, FieldProps, FFInputDate } from '@tpr/forms';
import { useLocation, useHistory, matchPath } from 'react-router-dom';

const SchemeStatusAndMembership = () => {
  const history = useHistory();
  const location = useLocation();

  const RADIO_BUTTON_NAME = 'scheme-status';

  const SchemeStatusFields: FieldProps[] = [
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Open to new members',
      value: 'open',
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Closed to new members',
      value: 'closed',
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Paid up (frozen)',
      value: 'paid',
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Winding up',
      hint:
        'The trustees have started the process of ending the scheme so that no members, assets or liabilities are left.',
      value: 'winding',
    },
  ];

  const SchemeMembershipFields: FieldProps[] = [
    {
      name: 'Active Members',
      type: 'number',
      label: 'Active members',
      hint:
        'Active members have benefits under the scheme and are continuing to save into it.',
      required: true,
    },
    {
      name: 'Deferred Members',
      type: 'number',
      label: 'Deferred members',
      hint:
        'Deferred members have stopped paying into the scheme but are not yet receiving a pension.',
      required: true,
    },
    {
      name: 'Pensioner Members',
      type: 'number',
      label: 'Pensioner members',
      hint: 'Pensioner members are receiving a pension from the scheme.',
      required: true,
    },
    {
      name: 'Total Members',
      type: 'number',
      label: 'Total members',
      required: true,
    },
  ];

  const onSubmit = () => {
    console.log('Form submit');
  };

  return (
    <div className={Styles.root}>
      <Sidebar
        history={history}
        location={location}
        title={'Scheme return home'}
        matchPath={matchPath}
        sections={[
          {
            title: 'Scheme details',
            order: 1,
            links: [
              {
                name: 'Scheme name and address',
                completed: true,
                path: '/scheme-name',
              },
              {
                name: 'Scheme status and membership',
                completed: false,
                path: '/scheme-status-and-membership',
              },
              {
                name: 'Consent to electronic communication',
                completed: false,
                path: '/electronic-communication',
              },
            ],
          },
          {
            title: 'Role',
            order: 2,
            links: [
              {
                name: 'Trustee details',
                completed: false,
                path: '/trustee-details',
              },
              {
                name: 'Employer details',
                completed: false,
                path: '/employer-details',
              },
              {
                name: 'Service provider details',
                completed: false,
                path: '/service-provider-details',
              },
              {
                name: 'Named contact details',
                completed: false,
                path: '/named-contract-details',
              },
            ],
          },
          {
            title: 'Finish Up',
            order: 3,
            links: [
              {
                name: 'Review and submit',
                completed: false,
                path: '/review-and-submit',
              },
            ],
          },
        ]}
      />

      <div className={Styles.main}>
        <ArrowLink
          iconSide="left"
          pointsTo="left"
          onClick={() => {
            window.location.href =
              'https://exchange.thepensionsregulator.gov.uk/Members/SchemeListing.aspx';
          }}
        />
        <H1>Scheme status and membership</H1>
        <Hr />
        <P>
          These are the scheme details currently held by the regulator. Correct
          any details as necessary.
        </P>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form>
              <H2>Scheme status</H2>
              <div>{renderFields(SchemeStatusFields)}</div>
              <div>
                <FFInputDate
                  name="schemeStatusApplied"
                  label="Date scheme status applied"
                  hint="For example, 31 2 2019"
                  error="The date the membership became effective must be in the past"
                  required
                />
              </div>
              <H2>Scheme membership</H2>
              <P>Tell us the number of:</P>
              <div>{renderFields(SchemeMembershipFields)}</div>
              <FFInputDate
                name="membershipEffective"
                label="Date membership became effective"
                hint="For example, 31 2 2019"
                error="The date the membership became effective must be in the past"
                required
                validate={(value) => {
                  const valueDate = new Date(value);
                  const currentDate = new Date();

                  if (valueDate > currentDate) {
                    return 'The date the membership became effective must be in the past';
                  }
                }}
              />
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default SchemeStatusAndMembership;
