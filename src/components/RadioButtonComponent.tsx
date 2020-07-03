import React from 'react';
import { Form, FFRadioButton } from '@tpr/forms';

const RadioButtonComponent = () => (
  <Form onSubmit={console.log} initialValues={{ radioButton: 'value3' }}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FFRadioButton name="radioButton" label="option1" value="value1" />
        <FFRadioButton
          name="radioButton"
          label="option2"
          value="value2"
          hint="Text can be added to prompt the user"
        />
        <FFRadioButton
          name="radioButton"
          label="option3"
          value="value3"
          hint="One radio button can be preselected"
        />
      </form>
    )}
  </Form>
);

export default RadioButtonComponent;
