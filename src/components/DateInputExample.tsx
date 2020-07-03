import React from 'react';
import { Form, FFInputDate } from '@tpr/forms';

const DateInputExample = () => (
  <Form onSubmit={console.log}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FFInputDate required name="DoB entry" label="When were you born?" />
      </form>
    )}
  </Form>
);

export default DateInputExample;
