import React from 'react';
import { FFSelect, Form } from '@tpr/forms';
import { P } from '@tpr/core';
import Styles from './Spacing.module.scss';

const SelectInputExample = () => (
  <div>
    <Form onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FFSelect
            required
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
    <P className={Styles.root}>Dropdown boxes can be optional</P>
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
  </div>
);

export default SelectInputExample;
