import { Flex, H2, H3, Hr, P } from '@tpr/core';
import { FFInputCurrency, FFInputNumber } from '@tpr/forms';
import { HelpLink } from '@tpr/layout';
import React from 'react';
import styles from './Liabilities.module.scss';

export const Liabilities: React.FC = () => {
  return (
    <Flex>
      <Flex cfg={{ ml: 2, flexDirection: 'column' }}>
        <H2 cfg={{ mb: 4 }}>Liabilities</H2>
        <P cfg={{ mb: 6 }}>
          Do <strong>not </strong> include the expenses within the active,
          deferred and pensioner components, even if this was the approach taken
          in previous years. For insured liabilities, enter the percentage of
          liabilities for members whose scheme benefits were fully matched by
          deferred or immediate purchased in the name of the trustee(s).
        </P>
        <Flex cfg={{ flexDirection: 'row' }}>
          <Flex cfg={{ flexDirection: 'row' }}>
            <Flex
              cfg={{ flexDirection: 'column', mr: 3, pt: 2 }}
              className={`${styles.columns} ${styles.firstColumn}`}
            >
              <H3 cfg={{ mb: 3, fontSize: 3, fontWeight: 3 }}>
                Protected liabilities
              </H3>
              <FFInputCurrency
                name="ActiveLiabilities"
                inputWidth={7}
                before="£"
                validate={(value: any) => {
                  if (value <= 5.0) return 'value must be greater than 5';
                }}
                label="Active members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputCurrency
                name="DeferredLiabilities"
                inputWidth={7}
                before="£"
                label="Deferred members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputCurrency
                name="PensionerLiabilities"
                inputWidth={7}
                before="£"
                label="Pensioner members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputCurrency
                name="WindingUpLiabilities"
                inputWidth={7}
                before="£"
                label="Estimated expenses of winding up"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputCurrency
                name="ExternalLiabilities"
                inputWidth={7}
                before="£"
                label="External liabilities"
                required
                cfg={{ mb: 6 }}
              />

              <FFInputCurrency
                name="BenefitLiabilities"
                inputWidth={7}
                before="£"
                label="Estimated expenses of benefit installation/payment"
                required
                cfg={{ mb: 6 }}
              />
              <Hr cfg={{ mb: 3, mt: 2 }} />
              <FFInputCurrency
                name="TotalProtectedLiabilities"
                inputWidth={7}
                before="£"
                label="Total protected liabilities"
                required
                cfg={{ mb: 6 }}
              />
            </Flex>
            <Flex
              cfg={{ flexDirection: 'column', pl: 3, pr: 3, pt: 2 }}
              className={`${styles.columns} ${styles.secondColumn}`}
            >
              <H3 cfg={{ mb: 3, fontSize: 3, fontWeight: 3 }}>
                Insured liabilities
              </H3>
              <FFInputNumber
                type="number"
                name="ActiveInsurer"
                after="%"
                inputWidth={3}
                label="Active members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="DeferredInsurer"
                after="%"
                inputWidth={3}
                label="Deferred members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="PensionerInsurer"
                after="%"
                inputWidth={3}
                label="Pensioner members"
                required
                cfg={{ mb: 6 }}
              />
            </Flex>

            <Flex
              cfg={{ flexDirection: 'column', pl: 3, pr: 3, pt: 2 }}
              className={`${styles.columns} ${styles.thirdColumn}`}
            >
              <H3 cfg={{ mb: 3, fontSize: 3, fontWeight: 3 }}>
                Number of members
              </H3>
              <FFInputNumber
                type="number"
                name="ActiveNumber"
                inputWidth={9}
                label="Active members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="DeferredNumber"
                inputWidth={9}
                label="Deferred members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="PensionerNumber"
                inputWidth={9}
                label="Pensioner members"
                required
                cfg={{ mb: 6 }}
              />
            </Flex>
            <Flex
              cfg={{ flexDirection: 'column', pl: 3, pr: 3, pt: 2 }}
              className={` ${styles.columns} ${styles.forthColumn}`}
            >
              <H3 cfg={{ mb: 3, fontSize: 3, fontWeight: 3 }}>Average ages</H3>
              <FFInputNumber
                type="number"
                name="ActiveAge"
                inputWidth={3}
                label="Active members"
                required
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="DeferredAge"
                inputWidth={3}
                cfg={{ mb: 6 }}
              />
              <FFInputNumber
                type="number"
                name="PensionerAge"
                inputWidth={3}
                cfg={{ mb: 6 }}
              />
            </Flex>
          </Flex>
        </Flex>
        <HelpLink title="Help with liabilities">Help text content</HelpLink>
      </Flex>
    </Flex>
  );
};
