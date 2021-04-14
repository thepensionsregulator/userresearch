import { Flex, H2, P } from '@tpr/core';
import { FFRadioButton } from '@tpr/forms';
import React from 'react';
import styles from './GuidanceAndAssumptions.module.scss';

export interface GuidanceAndAssumptionsProps {
  guidance?: string;
  assumption?: string;
}

export const GuidanceAndAssumptions: React.FC<GuidanceAndAssumptionsProps> = ({
  guidance,
  assumption,
}) => {
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
          {guidance ? (
            <>
              <P>{guidance}</P>
            </>
          ) : (
            <>
              <FFRadioButton value="G8" label="G8" name="Guidance" />
              <FFRadioButton value="G7" label="G7" name="Guidance" />
              <FFRadioButton value="G6" label="G6" name="Guidance" />
            </>
          )}
        </fieldset>
        <fieldset className={styles.questionSets}>
          <P>S179 assumptions used for this valuation</P>
          {assumption ? (
            <>
              <P>{assumption}</P>
            </>
          ) : (
            <>
              <FFRadioButton value="A9" label="A9" name="Assumptions" />
              <FFRadioButton value="A8" label="A8" name="Assumptions" />{' '}
            </>
          )}
        </fieldset>
      </Flex>
    </Flex>
  );
};
