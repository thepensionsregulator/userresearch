import React from 'react';
import { ArrowLink, WarningBox, ArrowButton } from '@tpr/layout';
import { H1, Hr, P, Link } from '@tpr/core';
import { Form, FieldProps, renderFields } from '@tpr/forms';
import Styles from './Layout.module.scss';

const SchemeWoundUp = () => {
  const onSubmit = () => console.log('Submit handled');
  const FIELD_NAME = 'windUpDate';
  const fields: FieldProps[] = [
    {
      name: FIELD_NAME,
      type: 'date',
      label: 'When did winding up of the scheme finish?',
      hint: 'For example, 31 3 2019 or 31 03 2019',
      error: 'Date is required',
      required: true,
    },
  ];
  return (
    <div className={Styles.root}>
      <div className={Styles.main}>
        <ArrowLink
          iconSide="left"
          pointsTo="left"
          onClick={() => console.log('Back button clicked')}
        />
        <H1 cfg={{ mb: 8 }}>Scheme wound up</H1>
        <Hr cfg={{ mb: 8 }} />
        <P>
          If this scheme has wound up, you don't need to complete a scheme
          return.
        </P>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {renderFields(fields)}
              <WarningBox>
                <P>
                  <b>Are you sure the scheme has wound up?</b>
                </P>
                <P>
                  Choosing 'Confirm' will update the details we hold about this
                  scheme and will remove it from your list of schemes. You'll no
                  longer be able to access it. You may want to save or print
                  previous scheme returns for your records.
                </P>
                <ArrowButton
                  intent="danger"
                  title="Confirm"
                  pointsTo="right"
                  iconSide="right"
                />
                <Link underline={true}>Cancel</Link>
              </WarningBox>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default SchemeWoundUp;
