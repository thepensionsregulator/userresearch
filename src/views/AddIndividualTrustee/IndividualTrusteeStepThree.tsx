import React from 'react';
import Styles from '../Layout.module.scss';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H3, H1, Hr } from '@tpr/core';
import { Form, renderFields, FieldProps } from '@tpr/forms';
import ScrollToTop from '../../components/ScrollToTop';

const IndividualTrusteeStepThree = (props: any) => {
  const history = useHistory();

  const fields: FieldProps[] = [
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine1',
      label: 'Address line 1',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter address line 1';
      },
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine2',
      label: 'Address line 2',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'addressLine3',
      label: 'Address line 3',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'postTown',
      label: 'Post town',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter post town';
      },
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'county',
      label: 'County',
      cfg: { my: 5 },
      validate: (_) => {},
    },
    {
      type: 'text',
      inputWidth: 5,
      name: 'postCode',
      label: 'Post code',
      cfg: { my: 5 },
      validate: (values) => {
        if (!values) return 'Enter postcode';
      },
    },
  ];
  return (
    <div className={Styles.main}>
      <ArrowLink
        pointsTo="left"
        iconSide="left"
        title="Back"
        onClick={() => history.goBack()}
        cfg={{ mt: 3 }}
      />
      <H3 cfg={{ mt: 2 }}>Add trustee: Individual</H3>
      <H1 cfg={{ mt: 2, mb: 3 }}>What is this trustee's address?</H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Form onSubmit={props.onSubmit}>
        {({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            {renderFields(fields)}
            <Hr cfg={{ mt: 8, mb: 4 }} />
            <ArrowButton
              type="submit"
              iconSide="right"
              pointsTo="right"
              title="Continue"
              cfg={{ my: 4 }}
              disabled={!valid}
            />
          </form>
        )}
      </Form>
      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepThree;
