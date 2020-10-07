import React, { useContext } from 'react';
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
import UserResearchSidebar from '../components/UserResearchSidebar';
import { Link, useHistory } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import StateContext from '../StateContext';
import SidebarContext from '../components/SidebarContext';
const SchemeStatusAndMembership = () => {
  const appState = useContext(StateContext);
  const history = useHistory();

  const RADIO_BUTTON_NAME = 'schemeStatus';

  const SchemeStatusFields: FieldProps[] = [
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Open to new members',
      hint: 'New members can join the scheme',
      value: 'open',
      cfg: { mt: 1, mb: 3 },
    },
    {
      name: RADIO_BUTTON_NAME,
      type: 'radio',
      label: 'Closed to new members',
      hint: 'New members are not allowed to join the scheme',
      value: 'closed',
      cfg: { mt: 1, mb: 3 },
    },
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
      label: 'Winding up',
      hint:
        'The trustees have started the process of winding up the scheme so that there will be no members, assets or liabilities.',
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
      cfg: { mb: 5 },
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
      cfg: { mb: 5 },
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
      cfg: { mb: 5 },
      required: true,
    },
  ];

  const { dispatch } = useContext(SidebarContext);

  const onSubmit = (values: any) => {
    appState.setSchemeStatus(values.schemeStatus);
    appState.setSchemeStatusApplied(values.schemeStatusApplied);
    appState.setActiveMembers(values.activeMembers);
    appState.setDeferredMembers(values.deferredMembers);
    appState.setPensionerMembers(values.pensionerMembers);
    appState.setMembershipEffective(values.dateMembershipEffective);
    dispatch({ type: 'COMPLETE', index: 1 });
    history.push('/consent-to-electronic-communication');
  };

  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <Link to="/scheme-name-and-address">
          <ArrowLink
            onClick={() => {}}
            iconSide="left"
            pointsTo="left"
            cfg={{ mt: 3 }}
          />
        </Link>
        <H1 cfg={{ mb: 2 }}>Scheme status and membership</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <P cfg={{ mb: 6 }}>
          These are the scheme details held by the regulator. Change or amend
          where necessary.
        </P>
        <Form
          onSubmit={onSubmit}
          validate={validate(SchemeMembershipFields)}
          initialValues={{
            [RADIO_BUTTON_NAME]: appState.schemeStatus,
            schemeStatusApplied: appState.schemeStatusApplied,
            activeMembers: appState.activeMembers,
            deferredMembers: appState.deferredMembers,
            pensionerMembers: appState.pensionerMembers,
            totalMembers: appState.totalMembers,
            dateMembershipEffective: appState.membershipEffective,
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <H4 cfg={{ mb: 6 }}>Scheme status</H4>
              <SeparatorY>
                <div>{renderFields(SchemeStatusFields)}</div>
              </SeparatorY>
              <Flex cfg={{ bg: 'neutral.3', p: 6 }}>
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

              <H4 cfg={{ my: 4 }}>Scheme Membership</H4>
              <P cfg={{ my: 2 }}>
                Only count each member once. (For example, if a member has both
                active and deferred benefits, only count the member once as an
                active member).
              </P>
              <P cfg={{ mb: 3 }}>Tell us the number of:</P>
              <div>{renderFields(SchemeMembershipFields)}</div>
              <Flex cfg={{ bg: 'neutral.3', p: 6 }}>
                <FFInputDate
                  name="dateMembershipEffective"
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
        <ScrollToTop />
      </div>
    </div>
  );
};

export default SchemeStatusAndMembership;
