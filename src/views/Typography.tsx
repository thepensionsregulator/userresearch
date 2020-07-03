import React from 'react';
import { H1, H2, H3, H4, H5, H6, P, Span, Text, Hr, Button } from '@tpr/core';
import Styles from './Typography.module.scss';
import TextInputExample from '../components/TextInputExample';
import SelectInputExample from '../components/SelectInputExample';
import RadioButtonExample from '../components/RadioButtonExample';
import NumberInputExample from '../components/NumberInputExample';
import DateInputExample from '../components/DateInputExample';
import CheckboxInputExample from '../components/CheckboxInputExample';

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
          <H3>Checkbox Input</H3>
          <div className={Styles.component}>
            <CheckboxInputExample />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Date Input</H3>
          <div className={Styles.component}>
            <DateInputExample />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Number Input</H3>
          <div className={Styles.component}>
            <NumberInputExample />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Radiobutton</H3>
          <div className={Styles.component}>
            <RadioButtonExample />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Dropdown Menu</H3>
          <div className={Styles.component}>
            <SelectInputExample />
          </div>
        </div>
        <div className={Styles.grouping}>
          <H3>Text Input</H3>
          <div className={Styles.component}>
            <TextInputExample />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Typography;
