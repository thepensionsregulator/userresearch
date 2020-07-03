import React from 'react';
import { H1, H2, H3, H4, H5, H6, P, Span, Text, Hr } from '@tpr/core';
import {
  FFCheckbox,
  Form,
  FFInputDate,
  FFInputNumber,
  FFRadioButton,
} from '@tpr/forms';
import Styles from './Typography.module.scss';
import TextComponent from '../components/TextComponent';
import SelectComponent from '../components/SelectComponent';

const Typography = () => (
  <div className={Styles.root}>
    <div className={Styles.componentList}>
      <H1>Component List</H1>
      <P>
        The quick brown fox jumped over the lazy dog The quick brown fox jumped
        over the lazy dog The quick brown fox jumped over the lazy dog The quick
        brown fox jumped over the lazy dog The quick brown fox jumped over the
        lazy dog
      </P>
      <div>
        <H2>Typography</H2>
        <div>
          <div className={Styles.grouping}>
            <H3>Headings</H3>

            <div className={Styles.component}>
              <H1>This is a h1 component</H1>
              <Hr />
            </div>

            <div className={Styles.component}>
              <H2>This is a h2 component</H2>
              <Hr />
            </div>
            <div className={Styles.component}>
              <H3>This is a H3 component</H3>
              <Hr />
            </div>
            <div className={Styles.component}>
              <H4>This is a H4 component</H4>
              <Hr />
            </div>
            <div className={Styles.component}>
              <H5>This is a H5 component</H5>
              <Hr />
            </div>
            <div className={Styles.component}>
              <H6>This is a H6 component</H6>
              <Hr />
            </div>
          </div>
          <div className={Styles.grouping}>
            <H3>Text</H3>
            <div className={Styles.component}>
              <P>The quick brown fox jumped over the lazy dog</P>
              <P>This is a P component</P>
            </div>
            <div className={Styles.component}>
              <Span>The quick brown fox jumped over the lazy dog</Span>
              <P>This is a Span component</P>
            </div>
            <div className={Styles.component}>
              <Text tag="p">The quick brown fox jumped over the lazy dog</Text>
              <P>This is a Text component</P>
            </div>
          </div>
        </div>
      </div>
      <div>
        <H2>Forms</H2>
        <div className={Styles.grouping}>
          <H3>Checkbox</H3>
          <div className={Styles.component}>
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
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Date</H3>
          <div className={Styles.component}>
            <Form onSubmit={console.log}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FFInputDate
                    required
                    name="DoB entry"
                    label="When were you born?"
                  />
                </form>
              )}
            </Form>
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Number</H3>
          <div className={Styles.component}>
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
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Radio</H3>
          <div className={Styles.component}>
            <Form
              onSubmit={console.log}
              initialValues={{ radioButton: 'value3' }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FFRadioButton
                    name="radioButton"
                    label="option1"
                    value="value1"
                  />
                  <FFRadioButton
                    name="radioButton"
                    label="option2"
                    value="value2"
                    hint="Text can be added to prompt the user"
                  />
                  <FFRadioButton
                    name="radioButton"
                    label="option3"
                    value="value3"
                    hint="One radio button can be preselected"
                  />
                </form>
              )}
            </Form>
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Select</H3>
          <div className={Styles.component}>
            <SelectComponent />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Text</H3>
          <div className={Styles.component}>
            <TextComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Typography;
