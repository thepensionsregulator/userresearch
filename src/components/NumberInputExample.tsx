import React from 'react';
import { Form, FFInputNumber } from '@tpr/forms';

const NumberInputExample = () => (
  <Form onSubmit={console.log}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FFInputNumber
          required
          name="DoB entry"
          label="What is your favorite number?"
        />
      </form>
    )}
  </Form>
);

export default NumberInputExample;
