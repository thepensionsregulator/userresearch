import React from 'react';
import Styles from './Layout.module.scss';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { H1, Hr, P } from '@tpr/core';
import { Form, renderFields, FieldProps } from '@tpr/forms';

const InitialQuestions = () => {
  const FIELD_NAME = 'schemeWoundUp?';
  const fields: FieldProps[] = [
    {
      name: FIELD_NAME,
      label: 'Yes',
      value: 'yes',
      type: 'radio',
      cfg: { my: 4 },
    },
    { name: FIELD_NAME, label: 'No', value: 'no', type: 'radio' },
  ];
  return (
    <div className={Styles.root}>
      <div className={Styles.main}>
        <ArrowLink
          iconSide="left"
          pointsTo="left"
          onClick={() => console.log('clickity click')}
        />
        <H1>Check if you need to complete a scheme return</H1>
        <Hr cfg={{ my: 2 }} />
        <P cfg={{ my: 4 }}>
          <b>Has this pension scheme been wound up and no longer exists?</b>
        </P>
        <P>
          You should only choose 'yes' if the scheme no longer has any members,
          assets or liabilities and the winding up
        </P>
        <P>
          process has finished. If you're not sure, check the current details of
          the scheme. (open in new window/tab)
        </P>
        <Form onSubmit={console.log}>
          {({ handleSubmit, pristine }) => (
            <form>
              {renderFields(fields)}
              <Hr cfg={{ my: 8 }} />
              <ArrowButton
                iconSide="right"
                pointsTo="right"
                onClick={() => console.log('click again')}
                title={'Continue'}
                disabled={pristine}
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
export default InitialQuestions;
