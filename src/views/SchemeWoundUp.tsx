import React from 'react';
import { ArrowLink, WarningBox, ArrowButton } from '@tpr/layout';
import { H1, Hr, P, Link } from '@tpr/core';
import { Form, FieldProps, renderFields, validate } from '@tpr/forms';
import Styles from './Layout.module.scss';
import { useHistory } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const SchemeWoundUp = () => {
  const history = useHistory();
  const onSubmit = () =>
    history.push('/initial-questions/scheme-wound-up/wound-up-confirmation');
  const FIELD_NAME = 'windUpDate';
  const fields: FieldProps[] = [
    {
      name: FIELD_NAME,
      type: 'date',
      label: 'When did winding up of the scheme finish?',
      hint: 'For example, 31 3 2019 or 31 03 2019',
      error: 'Date is required',
      required: true,
      cfg: { mb: 6 },
    },
  ];
  return (
    <div>
      <ArrowLink
        iconSide="left"
        pointsTo="left"
        onClick={() => history.push('/initial-questions')}
      />
      <H1 cfg={{ mb: 8 }}>Scheme wound up</H1>
      <Hr cfg={{ mb: 8 }} />
      <P cfg={{ mb: 4 }}>
        If this scheme has wound up, you don't need to complete a scheme return.
      </P>
      <Form onSubmit={onSubmit} validate={validate(fields)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {renderFields(fields)}
            <div className={Styles.warningBox}>
              <WarningBox>
                <P cfg={{ my: 3 }}>
                  <b>Are you sure this scheme has wound up?</b>
                </P>
                <P cfg={{ mb: 4 }}>
                  Choosing 'Confirm' will update the details we hold about this
                  scheme and will remove it from your list of schemes. You'll no
                  longer be able to access it. You may want to{' '}
                  <Link underline>save or print previous scheme returns</Link>
                  for your records.
                </P>
                <div>
                  <ArrowButton
                    type="submit"
                    intent="danger"
                    title="Confirm"
                    pointsTo="right"
                    iconSide="right"
                    cfg={{ mr: 4 }}
                  />
                  <Link
                    underline
                    onClick={() => history.push('/initial-questions')}
                  >
                    Cancel
                  </Link>
                </div>
              </WarningBox>
            </div>
          </form>
        )}
      </Form>
      <ScrollToTop />
    </div>
  );
};

export default SchemeWoundUp;
