import React from 'react';
import { Form, validate, renderFields } from '@tpr/forms';

const TextInputExample = () => {
  const fields: any[] = [
    {
      type: 'text',
      name: 'event_place',
      label: 'Event Location',
      hint: 'The location must be London',
      error: (value: any, _fields: any) => {
        return value === 'London' ? undefined : 'Must be London';
      },
      placeholder: 'add some text here...',
      inputWidth: 5,
      cfg: { my: 5 },
    },
    {
      type: 'text',
      name: 'event_name',
      label: 'Event name',
      error: 'Enter an event name',
      placeholder: 'add some text here...',
      inputWidth: 5,
      cfg: { my: 5 },
    },
  ];
  return (
    <Form onSubmit={console.log} validate={validate(fields)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {renderFields(fields)}
          <button type="submit" style={{ display: 'none' }} children="Submit" />
        </form>
      )}
    </Form>
  );
};

export default TextInputExample;
