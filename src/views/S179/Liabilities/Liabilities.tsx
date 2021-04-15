import { Flex, H2, P } from '@tpr/core';
import { FFInputCurrency, FFInputNumber } from '@tpr/forms';
import { HelpLink } from '@tpr/layout';
import React from 'react';
import styles from './Liabilities.module.scss';

export const Liabilities: React.FC = () => {
  return (
    <Flex>
      <Flex cfg={{ ml: 2, flexDirection: 'column' }}>
        <H2>Liabilities</H2>
        <P>Here is some guidance text</P>
        <HelpLink title="Help with liabilities">Help text content</HelpLink>

        <Flex cfg={{ flexDirection: 'row' }}>
          <Flex cfg={{ flexDirection: 'column' }}>
            <Flex
              cfg={{
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <P className={styles.fieldTitles}>
                Liabilities <br /> (excluding expenses)
              </P>
              <P className={styles.fieldTitles}>Insurer liabilities</P>
              <P className={styles.fieldTitles}>Number of members</P>
              <P className={styles.fieldTitles}>Average ages</P>
            </Flex>
            <Flex cfg={{ flexDirection: 'row', my: 1 }}>
              <Flex
                cfg={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <P className={styles.rowTitle}>Active Members</P>
                <FFInputCurrency
                  name="ActiveLiabilities"
                  inputWidth={7}
                  before="£"
                  validate={(value: any) => {
                    if (value <= 5.0) return 'value must be greater than 5';
                  }}
                />
                <FFInputNumber
                  type="number"
                  name="ActiveInsurer"
                  after="%"
                  inputWidth={7}
                />
                <FFInputNumber
                  type="number"
                  name="ActiveNumber"
                  inputWidth={7}
                />
                <FFInputNumber type="number" name="ActiveAge" inputWidth={7} />
              </Flex>
            </Flex>
            <Flex
              cfg={{
                flexDirection: 'row',
                my: 1,
                justifyContent: 'space-between',
              }}
            >
              <P className={styles.rowTitle}>Deferred Members</P>

              <FFInputCurrency
                name="DeferredLiabilities"
                inputWidth={7}
                before="£"
              />
              <FFInputNumber
                type="number"
                name="DeferredInsurer"
                after="%"
                inputWidth={7}
              />
              <FFInputNumber
                type="number"
                name="DeferredNumber"
                inputWidth={7}
              />
              <FFInputNumber type="number" name="DeferredAge" inputWidth={7} />
            </Flex>
            <Flex
              cfg={{
                flexDirection: 'row',
                alignItems: 'center',
                my: 1,
              }}
            >
              <P className={styles.rowTitle}>Pensioner Members</P>

              <FFInputCurrency
                name="PensionerLiabilities"
                inputWidth={7}
                before="£"
              />

              <FFInputNumber
                type="number"
                name="PensionerInsurer"
                after="%"
                inputWidth={7}
              />
              <FFInputNumber
                type="number"
                name="PensionerNumber"
                inputWidth={7}
              />
              <FFInputNumber type="number" name="PensionerAge" inputWidth={7} />
            </Flex>
            <Flex cfg={{ flexDirection: 'row', my: 1 }}>
              <P className={styles.rowTitle}>
                Estimated expenses of winding up
              </P>

              <FFInputCurrency
                name="WindingUpLiabilities"
                inputWidth={7}
                before="£"
              />
            </Flex>
            <Flex cfg={{ flexDirection: 'row', my: 1 }}>
              <P className={styles.rowTitle}>External liabilities</P>

              <FFInputCurrency
                name="ExternalLiabilities"
                inputWidth={7}
                before="£"
              />
            </Flex>
            <Flex cfg={{ flexDirection: 'row', my: 1 }}>
              <P className={styles.rowTitle}>
                Estimated expenses of benefit installation/ payment
              </P>

              <FFInputCurrency
                name="BenefitLiabilities"
                inputWidth={7}
                before="£"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
