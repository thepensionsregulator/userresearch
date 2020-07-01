import React from 'react';
import { H1, H2, H3, H4, H5, H6, P, Span, Text } from '@tpr/core';
import { FFCheckbox, Form, FFInputDate, FFInputNumber } from '@tpr/forms';
const Typography = () => (
  <div>
    <H1>Component List</H1>
    <div>
      <H2>Typography</H2>
      <div>
        <div>
          <H3>Headings</H3>
          <div>
            <H1>The quick brown fox jumped over the lazy dog</H1>
            <P>This is a h1 component.</P>
          </div>
          <div>
            <H2>The quick brown fox jumped over the lazy dog</H2>
            <P>This is a h2 component.</P>
          </div>
          <div>
            <H3>The quick brown fox jumped over the lazy dog</H3>
            <P>This is a h3 component.</P>
          </div>
          <div>
            <H4>The quick brown fox jumped over the lazy dog</H4>
            <P>This is a h4 component.</P>
          </div>
          <div>
            <H5>The quick brown fox jumped over the lazy dog</H5>
            <P>This is a h5 component.</P>
          </div>
          <div>
            <H6>The quick brown fox jumped over the lazy dog</H6>
            <P>This is a h6 component.</P>
          </div>
        </div>
        <div>
          <H3>Text</H3>
          <div>
            <P>The quick brown fox jumped over the lazy dog</P>
            <P>This is a P component</P>
          </div>
          <div>
            <Span>The quick brown fox jumped over the lazy dog</Span>
            <P>This is a Span component</P>
          </div>
          <div>
            <Text tag="p">The quick brown fox jumped over the lazy dog</Text>
            <P>This is a Text component</P>
          </div>
        </div>
      </div>
    </div>
    <div>
      <H2>Forms</H2>
      <div>
        <H3>Checkbox</H3>
        <Form onSubmit={console.log} initialValues={{ 'checkbox-c': true }}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FFCheckbox name="checkbox-a" label="Option 1" />
              <FFCheckbox
                name="checkbox-b"
                label="Option 2"
                hint="Text can be added that to prompt the user"
              />
              <FFCheckbox
                name="checkbox-c"
                label="Option 3"
                hint="Checkboxes can be preselected"
              />
            </form>
          )}
        </Form>
      </div>
      <div>
        <H3>Date</H3>
        <Form onSubmit={console.log}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FFInputDate name="DoB entry" label="When were you born?" />
            </form>
          )}
        </Form>
      </div>
      <div>
        <H3>Number</H3>
        <Form onSubmit={console.log}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FFInputNumber
                name="DoB entry"
                label="What is your favorite number?"
              />
            </form>
          )}
        </Form>
      </div>
      <div>
        <H3>Radio</H3>
      </div>
      <div>
        <H3>Select</H3>
      </div>
      <div>
        <H3>Text</H3>
      </div>
    </div>
  </div>
);

export default Typography;
