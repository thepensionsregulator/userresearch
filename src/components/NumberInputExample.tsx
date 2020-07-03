import React from 'react';
import { Form, FFInputNumber } from '@tpr/forms';
import { P } from '@tpr/core';
import Styles from './Spacing.module.scss';

const NumberInputExample = () => (
  <div>
    <P>Number inputs can be optional</P>
    <Form onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FFInputNumber
            required
            name="FavNumberEntry"
            label="What is your favorite number?"
          />
        </form>
      )}
    </Form>
    <P className={Styles.root}>Number inputs can have validation</P>
    <Form onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FFInputNumber
            required
            name="FavNumberEntry"
            label="What is your favorite number?"
            hint="Your favorite number must be between 0 and 9"
            validate={(value) => {
              if (value < 0 || value > 9 || (!value && value !== 0)) {
                return 'Must be between 0 and 9';
              }
            }}
          />
        </form>
      )}
    </Form>
  </div>
);

export default NumberInputExample;
