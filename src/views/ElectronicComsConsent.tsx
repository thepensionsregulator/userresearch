import React from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, Flex, P } from '@tpr/core';
import { Form, FieldProps, renderFields, SeparatorX } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';

const ElectronicComsConsent = () => {
  const onSubmit = () => console.log('form submit');
  const FIELD_NAME = 'electronicConsent';
  const fields: FieldProps[] = [
    { name: FIELD_NAME, type: 'radio', value: 'yes', label: 'Yes' },
    { name: FIELD_NAME, type: 'radio', value: 'no', label: 'No' },
  ];

  return (
    <div className={Styles.root}>
      {/* SideBar component */}
      <div className={Styles.main}>
        <H1 cfg={{ mt: 6, mb: 2 }}>Consent to electronic communication</H1>
        <Hr cfg={{ mt: 5, mb: 8 }} />
        <Flex cfg={{ flexDirection: 'column' }}>
          <P cfg={{ mb: 4 }}>
            We would like to deliver notices, notifications and other
            information by email wherever possible.
          </P>
          <P>
            <strong>
              I confirm that I give consent to receiving information
              electronically and am authorised to provide this consent.
            </strong>
          </P>
        </Flex>

        <Form onSubmit={onSubmit} initialValues={{ [FIELD_NAME]: 'no' }}>
          {({ handleSubmit }) => (
            <form>
              <Flex cfg={{ mt: 2, mb: 6, flexDirection: 'column' }}>
                <SeparatorX>{renderFields(fields)}</SeparatorX>
              </Flex>
              <Hr cfg={{ mt: 6, mb: 8 }} />
              <ArrowButton
                title="Save and Continue"
                type="submit"
                pointsTo="right"
                iconSide="right"
              />
            </form>
          )}
        </Form>
        {/* BackToTop component */}
      </div>
    </div>
  );
};

export default ElectronicComsConsent;
