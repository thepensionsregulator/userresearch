import React from 'react';
import { H1, H2, H3, H4, H5, H6, P, Span, Text, Hr, Button } from '@tpr/core';
import Styles from './Typography.module.scss';
import TextInputExample from '../components/TextInputExample';
import SelectInputExample from '../components/SelectInputExample';
import RadioButtonExample from '../components/RadioButtonExample';
import NumberInputExample from '../components/NumberInputExample';
import DateInputExample from '../components/DateInputExample';
import CheckboxInputExample from '../components/CheckboxInputExample';
import ButtonSizeExample from '../components/ButtonSizeExample';
import ButtonAppearanceExample from '../components/ButtonAppearanceExample';
import ButtonAppearanceOutlinedExample from '../components/ButtonAppearanceOutlinedExample';
import ButtonSizeAndAppearanceExample from '../components/ButtonSizeAndAppearanceExample';

const Typography = () => (
  <div className={Styles.root}>
    <div className={Styles.componentList}>
      <H1>Component List</H1>
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
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia interdum lectus. Quisque luctus metus non arcu lacinia,
                a scelerisque elit porta. Etiam auctor vel urna vitae tristique.
                Mauris vel urna semper, sagittis magna nec, consectetur est.
                Phasellus pulvinar, nulla volutpat posuere tristique, purus
                lorem consequat mi, a vestibulum diam erat et velit. Duis nec
                faucibus tortor. Ut varius erat nec nisl mollis ultrices eu
                sollicitudin turpis. Proin vulputate purus sit amet varius
                posuere.
              </P>
              <P>This is a P component</P>
            </div>
            <div className={Styles.component}>
              <Span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia interdum lectus. Quisque luctus metus non arcu lacinia,
                a scelerisque elit porta. Etiam auctor vel urna vitae tristique.
                Mauris vel urna semper, sagittis magna nec, consectetur est.
                Phasellus pulvinar, nulla volutpat posuere tristique, purus
                lorem consequat mi, a vestibulum diam erat et velit. Duis nec
                faucibus tortor. Ut varius erat nec nisl mollis ultrices eu
                sollicitudin turpis. Proin vulputate purus sit amet varius
                posuere.
              </Span>
              <P>This is a Span component</P>
            </div>
            <div className={Styles.component}>
              <Text tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia interdum lectus. Quisque luctus metus non arcu lacinia,
                a scelerisque elit porta. Etiam auctor vel urna vitae tristique.
                Mauris vel urna semper, sagittis magna nec, consectetur est.
                Phasellus pulvinar, nulla volutpat posuere tristique, purus
                lorem consequat mi, a vestibulum diam erat et velit. Duis nec
                faucibus tortor. Ut varius erat nec nisl mollis ultrices eu
                sollicitudin turpis. Proin vulputate purus sit amet varius
                posuere.
              </Text>
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
          <H3 cfg={{ mb: 3 }}>Radiobutton</H3>
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
      <H2>Buttons</H2>
      <div className={Styles.grouping}>
        <H3>Different Sizes</H3>
        <div className={Styles.component}>
          <ButtonSizeExample />
        </div>
        <H3>Different Appearances</H3>
        <div className={Styles.component}>
          <ButtonAppearanceExample />
        </div>
        <H3>Different Appearances Outlined</H3>
        <div className={Styles.component}>
          <ButtonAppearanceOutlinedExample />
        </div>
        <H3>Combining Size and Appearance</H3>
        <div className={Styles.component}>
          <ButtonSizeAndAppearanceExample />
        </div>
      </div>
    </div>
  </div>
);

export default Typography;
