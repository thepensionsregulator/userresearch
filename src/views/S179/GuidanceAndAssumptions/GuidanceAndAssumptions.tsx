import { Flex, H2, P } from '@tpr/core';
import { FFRadioButton } from '@tpr/forms';
import React from 'react';
import styles from './GuidanceAndAssumptions.module.scss';

export const GuidanceAndAssumptions: React.FC = () => {
  return (
    <Flex cfg={{ flexDirection: 'column', my: 5 }}>
      <H2 cfg={{ mb: 2 }}>Guidance and Assumptions</H2>
      <P>
        These are the version numbers of the guidance and assumptions used to
        calculate the valuation. The versions used depend on when the valuation
        was made.
      </P>
      <Flex>
        <fieldset className={styles.questionSets}>
          <P>S179 guidance used for this valuation</P>
          <FFRadioButton name="G8" label="G8" />
          <FFRadioButton name="G7" label="G7" />
          <FFRadioButton name="G6" label="G6" />
        </fieldset>
        <fieldset className={styles.questionSets}>
          <P>S179 assumptions used for this valuation</P>
          <FFRadioButton name="A9" label="A9" />
          <FFRadioButton name="A8" label="A8" />
        </fieldset>
      </Flex>
    </Flex>
  );
};
