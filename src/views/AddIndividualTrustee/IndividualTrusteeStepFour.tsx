import React from 'react';
import Styles from '../Layout.module.scss';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H3, H1, Hr, P } from '@tpr/core';
import { Form, renderFields, FieldProps } from '@tpr/forms';
import ScrollToTop from '../../components/ScrollToTop';
import TrusteeRepository from '../../services/TrusteeRepository';

const IndividualTrusteeStepFour = (props: any) => {
  const history = useHistory();

  const fields: FieldProps[] = [
    {
      type: 'text',
      name: 'telephoneNumber',
      label: 'Phone number',
      cfg: { my: 5 },
      inputWidth: 5,
      validate: (values) => {
        if (!values) {
          return 'Enter a UK telephone number, such as 01632 960 001, 07700 900 982, or +44 0808 157 0192';
        }
      },
    },
    {
      type: 'text',
      name: 'emailAddress',
      label: 'Email address',
      cfg: { my: 5 },
      inputWidth: 5,
      validate: (values) => {
        if (!values) {
          return 'Enter an email address in the correct format, like name@example.com';
        }
      },
    },
  ];

  const onSubmit = (values: any) => {
    TrusteeRepository.WriteTrustee({ ...props.newTrustee, ...values });
    console.log('trustee added');
    history.push({ pathname: '/trustees', search: 'state=trustee-added' });
  };

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
      <H1 cfg={{ mt: 2, mb: 3 }}>How can we contact this trustee?</H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <P cfg={{ mb: 3 }}>
        Please provide contact for this trustee (not a third party, such as an
        administrator).
      </P>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            {renderFields(fields)}
            <Hr cfg={{ mt: 8, mb: 4 }} />
            <ArrowButton
              title="Save and Continue"
              type="submit"
              pointsTo="right"
              iconSide="right"
              disabled={!valid}
            />
          </form>
        )}
      </Form>
      <ScrollToTop />
    </div>
  );
};

export default IndividualTrusteeStepFour;
