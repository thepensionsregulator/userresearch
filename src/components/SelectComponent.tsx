import React from 'react';
import { FFSelect, Form } from '@tpr/forms';

const SelectComponent = () => (
  <Form onSubmit={console.log}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FFSelect
          name={'animal'}
          label="Select animal"
          hint="Please select an animal from the dropdown menu"
          options={[
            { label: 'Seal', value: 1 },
            { label: 'Warthog', value: 2 },
            { label: 'kangaroo', value: 3 },
            { label: 'Guinea Pig', value: 4 },
          ]}
        />
      </form>
    )}
  </Form>
);

export default SelectComponent;
