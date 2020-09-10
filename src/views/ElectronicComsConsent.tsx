import React, { useContext } from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, Flex, P } from '@tpr/core';
import { Form, FieldProps, renderFields, SeparatorX } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import UserResearchSidebar from '../components/UserResearchSidebar';
import ScrollToTop from '../components/ScrollToTop';
import StateContext from '../StateContext';
import SidebarContext from '../components/SidebarContext';

const ElectronicComsConsent = () => {
  const appState = useContext(StateContext);
  const history = useHistory();

  const FIELD_NAME = 'electronicConsent';

  const { dispatch } = useContext(SidebarContext);

  const submit = (values: any) => {
    appState.setElectronicConsent(values.electronicConsent);
    dispatch({ type: 'COMPLETE', index: 2 });
    history.push('/trustees');
  };

  const fields: FieldProps[] = [
    { name: FIELD_NAME, type: 'radio', value: 'yes', label: 'Yes' },
    { name: FIELD_NAME, type: 'radio', value: 'no', label: 'No' },
  ];

  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
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

        <Form
          onSubmit={submit}
          initialValues={{ [FIELD_NAME]: appState.electronicConsent }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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
        <ScrollToTop />
      </div>
    </div>
  );
};

export default ElectronicComsConsent;
