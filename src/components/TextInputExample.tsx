import React from 'react';
import { Form, validate, renderFields } from '@tpr/forms';

const TextInputExample = () => {
  const fields: any[] = [
    {
      type: 'text',
      name: 'event_place',
      label: 'Event place',
      hint: 'The word must be London exactly',
      error: (value: any, _fields: any) => {
        return value === 'London' ? undefined : 'Must be in London';
      },
      placeholder: 'add some text here...',
      inputWidth: 5,
      cfg: { my: 5 },
    },
    {
      type: 'text',
      name: 'event_name',
      label: 'Event name',
      hint: 'Cannot be empty',
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
