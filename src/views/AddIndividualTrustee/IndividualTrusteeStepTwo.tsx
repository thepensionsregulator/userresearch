import React from 'react';
import Styles from '../Layout.module.scss';
import { ArrowLink, ArrowButton, HelpLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H1, H3, Hr, H4 } from '@tpr/core';
import {
  Form,
  SeparatorY,
  renderFields,
  SeparatorX,
  FieldProps,
} from '@tpr/forms';
import ScrollToTop from '../../components/ScrollToTop';

const IndividualTrusteeStepTwo = (props: any) => {
  const history = useHistory();

  const TRUSTEE_TYPE_BUTTONS = 'trusteeType';
  const PROF_TRUSTEE_BUTTONS = 'professionalTrustee';

  const fields: FieldProps[][] = [
    [
      {
        name: TRUSTEE_TYPE_BUTTONS,
        type: 'radio',
        label: 'Member-nominated trustee',
        value: 'memberNominated',
      },
      {
        name: TRUSTEE_TYPE_BUTTONS,
        type: 'radio',
        label: 'Employer-appointed trustee',
        value: 'employerNominated',
      },
      {
        name: TRUSTEE_TYPE_BUTTONS,
        type: 'radio',
        label: 'Regulator-appointed trustee',
        value: 'regulatorAppointed',
      },
    ],
    [
      { name: PROF_TRUSTEE_BUTTONS, type: 'radio', label: 'Yes', value: 'yes' },
      {
        name: PROF_TRUSTEE_BUTTONS,
        type: 'radio',
        label: 'No',
        value: 'no',
        cfg: { mb: 4 },
      },
    ],
  ];

  const onSubmit = (values: any) => {
    props.setNewTrustee({ ...props.newTrustee, ...values });
    props.nextPage();
  };

  return (
    <div className={Styles.main}>
      <ArrowLink
        pointTo="left"
        iconSide="left"
        title="Back"
        cfg={{ mt: 3 }}
        onClick={() => history.goBack()}
      />
      <H3 cfg={{ mt: 2 }}>Add trustee: Individual</H3>
      <H1 cfg={{ mt: 2, mb: 3 }}>Type of trustee</H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <H4 cfg={{ mb: 2 }}>Select the most relevant option.</H4>
            <SeparatorY>{renderFields(fields[0])}</SeparatorY>
            <br />
            <H4 cfg={{ mb: 2 }}>Is this individual a professional trustee?</H4>
            <SeparatorX>{renderFields(fields[1])}</SeparatorX>
            <HelpLink
              title="What is a 'professional' trustee?"
              content="Someone will normally be considered a professional trustee if they
              represented or promoted themselves to the trustees or sponsors of
              one or more unrelated schemes as having expertise in trustee
              matters generally (rather than just in certain areas), whether
              they are paid for the expertise or not. Please see our professional trustee description policy  for a more detailed explanation and examples."
            />
            <Hr cfg={{ mt: 9, mb: 5 }} />
            <ArrowButton
              title="Continue"
              pointsTo="right"
              iconSide="right"
              type="submit"
              cfg={{ my: 4 }}
              disabled={
                !(values[TRUSTEE_TYPE_BUTTONS] && values[PROF_TRUSTEE_BUTTONS])
              }
            />
          </form>
        )}
      </Form>
      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepTwo;
