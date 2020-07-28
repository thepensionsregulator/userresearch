import React from 'react';
import Styles from './Layout.module.scss';
import { H1, H4, H3, Hr, Flex } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { Form, SeparatorX, renderFields, FieldProps } from '@tpr/forms';
import ScrollToTop from '../components/ScrollToTop';

const AddTrustee = () => {
  const history = useHistory();

  const RADIO_BUTTONS = 'trusteeType';

  const submit = (formValues: any) => {
    history.push(
      formValues[RADIO_BUTTONS] === 'individual'
        ? 'add-trustee/add-individual-step-1'
        : 'add-trustee/add-corporate-step-1',
    );
  };

  const fields: FieldProps[] = [
    {
      name: RADIO_BUTTONS,
      type: 'radio',
      label: 'Individual',
      value: 'individual',
    },
    {
      name: RADIO_BUTTONS,
      type: 'radio',
      label: 'Corporate',
      value: 'corporate',
    },
  ];
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <ArrowLink
          iconSide="left"
          pointsTo="left"
          title="Back"
          onClick={() => {
            history.goBack();
          }}
          cfg={{ mt: 3 }}
        />
        <H3 cfg={{ mt: 2 }}>Add trustee: Individual</H3>
        <H1 cfg={{ mt: 2, mb: 3 }}>Type of trustee</H1>
        <Hr cfg={{ mt: 4, mb: 5 }} />
        <H4 cfg={{ mb: 6 }}>Add an individual or corporate trustee?</H4>
        <Form onSubmit={submit}>
          {({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Flex cfg={{ mt: 2, mb: 4 }}>
                <SeparatorX>{renderFields(fields)}</SeparatorX>
              </Flex>
              <Hr cfg={{ mt: 8, mb: 4 }} />
              <ArrowButton
                cfg={{ my: 4 }}
                pointsTo="right"
                iconSide="right"
                type="submit"
                title="Continue"
                disabled={pristine}
              />
            </form>
          )}
        </Form>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default AddTrustee;
