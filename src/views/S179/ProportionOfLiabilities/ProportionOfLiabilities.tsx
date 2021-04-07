import { Flex, H2, P } from '@tpr/core';
import { FFInputNumber } from '@tpr/forms';
import React from 'react';
import styles from './ProportionOfLiabilities.module.scss';

export const ProportionOfLiabilities: React.FC = () => {
  return (
    <Flex cfg={{ flexDirection: 'column' }}>
      <H2 cfg={{ mt: 5, mb: 2 }}>Proportion of Liabilities</H2>
      <P>
        Enter the percentage of liabilities for each member type. Total for each
        member must equal 100%/
      </P>
      <Flex cfg={{ flexDirection: 'row' }}>
        <Flex cfg={{ flexDirection: 'column' }}>
          <Flex
            cfg={{
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <P className={styles.fieldTitles}>Pre 6 April 1997</P>
            <P className={styles.fieldTitles}>6 April 1997 - 5 April 2009</P>
            <P className={styles.fieldTitles}>Post 5 April 2009</P>
          </Flex>
          <Flex cfg={{ flexDirection: 'column', my: 1 }}>
            <Flex
              cfg={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Active Members</P>

              <FFInputNumber name="activePre1997" inputWidth={7} after="%" />
              <FFInputNumber
                type="number"
                name="activePreApril2009"
                after="%"
                inputWidth={7}
              />
              <FFInputNumber
                type="number"
                name="activePostApril2009"
                inputWidth={7}
              />
            </Flex>
            <Flex
              cfg={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Deferred Members</P>

              <FFInputNumber name="deferredPre1997" inputWidth={7} after="%" />
              <FFInputNumber
                type="number"
                name="deferredPreApril2009"
                after="%"
                inputWidth={7}
              />
              <FFInputNumber
                type="number"
                name="deferredPostApril2009"
                inputWidth={7}
              />
            </Flex>
            <Flex
              cfg={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <P className={styles.pensionerFieldTitles}>Pre 6 April 1997</P>
              <P className={styles.pensionerFieldTitles}>Post 5 April 2009</P>
            </Flex>
            <Flex
              cfg={{
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Pensioner Members</P>
              <Flex className={styles.pensionerFieldQuestion}>
                <FFInputNumber
                  name="pensionersPre1997"
                  inputWidth={7}
                  after="%"
                />
              </Flex>
              <Flex className={styles.pensionerFieldQuestion}>
                <FFInputNumber
                  type="number"
                  name="pensionerPost2009"
                  after="%"
                  inputWidth={7}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
