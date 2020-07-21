import React from 'react';
import { H1, Hr, P, H2, Flex, H3, H4 } from '@tpr/core';
import Styles from './Layout.module.scss';
import { Sidebar, ArrowLink, ArrowButton } from '@tpr/layout';
import {
  Form,
  renderFields,
  FieldProps,
  FFInputDate,
  SeparatorY,
  SeparatorX,
} from '@tpr/forms';
import { useLocation, useHistory, matchPath } from 'react-router-dom';

const SchemeStatusAndMembership = () => {
  const history = useHistory();
  const location = useLocation();

  const RADIO_BUTTON_NAME = 'scheme-status';

  const SchemeStatusFields: FieldProps[] = [
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Paid up (frozen)',
      hint:
        "No more contributions are due to be paid into the scheme. Existing members' benefits are still held in the scheme.",
      value: 'paid',
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Closed to new members',
      value: 'closed',
      cfg: { mt: 1, mb: 3 },
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Open to new members',
      value: 'open',
      cfg: { mt: 1, mb: 3 },
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
      name: 'Active Membership',
      type: 'number',
      label: 'Active Membership',
      hint:
        'Active members have benefits under the scheme and are continuing to save into it.',
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'Deferred Membership',
      type: 'number',
      label: 'Deferred Membership',
      hint:
        'Deferred members have stopped paying into the scheme but are not yet receiving a pension.',
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'Pensioner Membership',
      type: 'number',
      label: 'Pensioner Membership',
      hint: 'Pensioner members are receiving a pension from the scheme.',
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'Total Membership',
      type: 'number',
      label: 'Total Membership',
      inputWidth: 1,
      cfg: { mb: 3 },
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
          cfg={{ mt: 3 }}
        />
        <H1 cfg={{ mb: 2 }}>Scheme status and membership</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <P cfg={{ mb: 4 }}>
          These are the scheme details currently held by the regulator. Correct
          any details as necessary.
        </P>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form>
              <H4 cfg={{ mb: 2 }}>Scheme status</H4>
              <SeparatorY>
                <div>{renderFields(SchemeStatusFields)}</div>
              </SeparatorY>
              <Flex cfg={{ bg: 'neutral.1', p: 6 }}>
                <FFInputDate
                  name="schemeStatusApplied"
                  label="Date scheme status applied"
                  hint="For example, 31 2 2019"
                  error="The date the membership became effective must be in the past"
                  required
                />
              </Flex>

              <H4 cfg={{ mb: 2 }}>Scheme Membership</H4>
              <P cfg={{ mb: 2 }}>Tell us the number of:</P>
              <div>{renderFields(SchemeMembershipFields)}</div>
              <Flex cfg={{ bg: 'neutral.1', p: 6 }}>
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
              </Flex>
              <Hr cfg={{ mt: 4, mb: 8 }} />
              <ArrowButton
                type="submit"
                iconSide="right"
                pointsTo="right"
                title="Save and Continue"
              />
            </form>
          )}
        </Form>
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

export default SchemeStatusAndMembership;
