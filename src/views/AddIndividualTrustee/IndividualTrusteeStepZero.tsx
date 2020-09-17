import React from 'react';
import Styles from '../Layout.module.scss';
import ScrollToTop from '../../components/ScrollToTop';
import { Form, SeparatorX, renderFields, FieldProps } from '@tpr/forms';
import { Hr, Flex, H1, H3 } from '@tpr/core';
import { ArrowButton, ArrowLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';

const IndividualTrusteeStepZero = (props: any) => {
  const RADIO_BUTTONS = 'trusteeType';
  const history = useHistory();
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

  const onSubmit = (values: any) => {
    props.nextPage();
  };

  return (
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
      <H3 cfg={{ mt: 2 }}>Add trustee</H3>
      <H1 cfg={{ mt: 2, mb: 3 }}>
        Are you adding an individual or a corporate trustee?
      </H1>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Form onSubmit={onSubmit}>
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
  );
};

export default IndividualTrusteeStepZero;
