import React from 'react';
import Styles from '../Layout.module.scss';
import { H1, H3, Hr } from '@tpr/core';
import { useHistory } from 'react-router-dom';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { Form, renderFields, FieldProps, SeparatorY } from '@tpr/forms';
import ScrollToTop from '../../components/ScrollToTop';

const IndividualTrusteeStepOne = (props: any) => {
  const history = useHistory();

  const fields: FieldProps[] = [
    { type: 'text', label: 'Title', inputWidth: 5, name: 'title' },
    {
      type: 'text',
      label: 'Firstname',
      inputWidth: 5,
      name: 'firstName',
      validate: (value) => {
        if (!value) return 'Enter first name';
      },
    },
    {
      type: 'text',
      label: 'Lastname',
      inputWidth: 5,
      name: 'lastName',
      validate: (value) => {
        if (!value) return 'Enter last name';
      },
    },
  ];

  const onSubmit = (values: any) => {
    props.setNewTrustee({ ...props.newTrustee, ...values });
    props.nextPage();
  };

  return (
    <div className={Styles.main}>
      <ArrowLink
        pointsTo="left"
        iconSide="left"
        title="Back"
        onClick={() => {
          history.goBack();
        }}
        cfg={{ mt: 3 }}
      />
      <H3 cfg={{ mt: 2 }}>Add trustee: Individual</H3>
      <H1 cfg={{ mt: 2, mb: 3 }}>Name of the trustee</H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, hasValidationErrors }) => (
          <form onSubmit={handleSubmit}>
            <SeparatorY>{renderFields(fields)}</SeparatorY>
            <Hr cfg={{ mt: 7, mb: 4 }} />
            <ArrowButton
              type="submit"
              title="Continue"
              iconSide="right"
              pointsTo="right"
              cfg={{ my: 4 }}
              disabled={hasValidationErrors}
            />
          </form>
        )}
      </Form>
      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepOne;
