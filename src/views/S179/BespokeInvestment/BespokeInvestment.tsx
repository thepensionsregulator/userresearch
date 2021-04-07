import { Flex, H2, P } from '@tpr/core';
import { FFInputCurrency } from '@tpr/forms';
import React from 'react';
import styles from './BespokeInvestment.module.scss';

export const BespokeInvestment: React.FC = () => {
  return (
    <>
      <H2 cfg={{ mt: 5, mb: 2 }}>
        Bespoke investment risk calculation for PPF purposes
      </H2>
      <P>
        Schemes with liabilities of £1.5 billion or more must submit the results
        of a bespoke investment risk calculation. Schemes with liabilities of
        less than £1.5 billion can submit their results voluntarily. Enter the
        values as detailed in the most recently available audited scheme
        accounts.
      </P>
      <Flex>
        <Flex className={styles.bespokeInvestmentQuestions}>
          <FFInputCurrency
            before="£"
            name="StressedAssets"
            label="Stressed asset value"
          />
        </Flex>
        <Flex className={styles.bespokeInvestmentQuestions}>
          <FFInputCurrency
            before="£"
            name="UnstressedAssets"
            label="Unstressed asset value"
          />
        </Flex>
      </Flex>
    </>
  );
};
