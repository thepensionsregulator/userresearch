import React from 'react';
import { H1, Hr, P, Flex, H4 } from '@tpr/core';
import Styles from './Layout.module.scss';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import {
  Form,
  renderFields,
  FieldProps,
  FFInputDate,
  SeparatorY,
  validate,
} from '@tpr/forms';
import UserresearchSidebar from '../components/UserresearchSidebar';

const SchemeStatusAndMembership = () => {
  const RADIO_BUTTON_NAME = 'schemeStatus';

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
      value: 'windingUp',
    },
  ];

  const SchemeMembershipFields: FieldProps[] = [
    {
      name: 'activeMembers',
      type: 'number',
      label: 'Active Membership',
      hint:
        'Active members have benefits under the scheme and are continuing to save into it.',
      validate: (value: any, SchemeStatusFields: any) => {
        if (SchemeStatusFields.schemeStatus === 'paid' && value !== 0) {
          return 'If the scheme status is paid up the scheme must have no active members';
        } else if (value < 0 || (!value && value !== 0)) {
          return 'Active members must be 0 or above';
        } else {
          return undefined;
        }
      },
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'deferredMembers',
      type: 'number',
      label: 'Deferred Membership',
      hint:
        'Deferred members have stopped paying into the scheme but are not yet receiving a pension.',
      validate: (value: any, SchemeMembershipFields: any) => {
        if (value < 0 || (!value && value !== 0)) {
          return 'Deferred members must be 0 or above';
        } else {
          return undefined;
        }
      },
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'pensionerMembers',
      type: 'number',
      label: 'Pensioner Membership',
      hint: 'Pensioner members are receiving a pension from the scheme.',
      validate: (value: any, SchemeMembershipFields: any) => {
        if (value < 0 || (!value && value !== 0)) {
          return 'Pensioner members must be 0 or above';
        } else {
          return undefined;
        }
      },
      inputWidth: 1,
      cfg: { mb: 3 },
      required: true,
    },
    {
      name: 'totalMembership',
      type: 'number',
      label: 'Total Membership',
      validate: (value: any, SchemeMembershipFields: any) => {
        const totalMembers =
          SchemeMembershipFields.activeMembers +
          SchemeMembershipFields.deferredMembers +
          SchemeMembershipFields.pensionerMembers;
        if (value !== totalMembers) {
          return 'Total members must be equal to the total of active, deferred and pensioner members';
        }
      },
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
      <UserresearchSidebar />

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
        <Form onSubmit={onSubmit} validate={validate(SchemeMembershipFields)}>
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
                  hint="For example, 31 2 2019 or 31 02 2019"
                  validate={(value) => {
                    const valueDate = new Date(value);
                    const previousSchemeDate = new Date('2019-02-31');
                    if (previousSchemeDate >= valueDate) {
                      return 'The new scheme status date must be after the previous scheme status date';
                    }
                  }}
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
                  hint="For example, 31 2 2019 or 31 02 2019"
                  validate={(value) => {
                    const valueDate = new Date(value);
                    const dateUpperBound = new Date('2019-03-31');
                    const dateLowerBound = new Date('2018-04-01');
                    if (
                      dateLowerBound < valueDate &&
                      valueDate > dateUpperBound
                    ) {
                      return 'The date when the membership numbers applied must be between 1 April 2018 and 31 March 2019';
                    }
                  }}
                  required
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
