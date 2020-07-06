import React from 'react';
import { Form, FFCheckbox } from '@tpr/forms';

const CheckboxInputExample = () => (
  <Form onSubmit={console.log} initialValues={{ 'checkbox-c': true }}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FFCheckbox name="checkbox-a" label="Option 1" />
        <FFCheckbox
          name="checkbox-b"
          label="Option 2"
          hint="Text can be added to prompt the user"
        />
        <FFCheckbox
          name="checkbox-c"
          label="Option 3"
          hint="Checkboxes can be preselected"
        />
      </form>
    )}
  </Form>
);

export default CheckboxInputExample;
