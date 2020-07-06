import React from 'react';
import { Form, FFInputDate } from '@tpr/forms';
import { P } from '@tpr/core';
import Styles from './Spacing.module.scss';

const DateInputExample = () => (
  <div>
    <Form onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FFInputDate required name="DoB entry" label="When were you born?" />
        </form>
      )}
    </Form>
    <P className={Styles.root}>Date fields can be optional</P>
    <Form onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FFInputDate name="DoB entry" label="When were you born?" />
        </form>
      )}
    </Form>
  </div>
);

export default DateInputExample;
