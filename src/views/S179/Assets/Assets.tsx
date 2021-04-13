import { Flex, H2, P } from '@tpr/core';
import { FFInputCurrency, FFInputDate, FFInputNumber } from '@tpr/forms';
import React from 'react';
import styles from './Assets.module.scss';

export const Assets: React.FC = () => {
  return (
    <Flex cfg={{ my: 5, flexDirection: 'column' }}>
      <H2 cfg={{ mb: 5 }}>Assets</H2>
      <Flex cfg={{ flexDirection: 'column' }}>
        <Flex cfg={{ flexDirection: 'column' }}>
          <Flex>
            <P className={styles.assetQuestions}>Total Assets</P>
            <FFInputCurrency name="TotalValue" before="£" />
          </Flex>
          <Flex>
            <P className={styles.assetQuestions}>Percentage of Assets</P>
            <FFInputNumber name="PercentageOfAssets" after="%" />
          </Flex>
        </Flex>
        <Flex cfg={{ p: 5, bg: 'neutral.2', mt: 4 }}>
          <FFInputDate
            name="Date of relevant accounts"
            label="Date of relevant accounts"
            hint="For example, 31 3 2019 or 31 03 2019"
            required
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
