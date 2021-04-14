import { Flex, H2, P } from '@tpr/core';
import { FFInputCurrency } from '@tpr/forms';
import React, { useContext, useEffect, useState } from 'react';
import { S179Context } from '../Services/S179Context';
import styles from './BespokeInvestment.module.scss';

export const BespokeInvestment: React.FC = () => {
  const [optional, setOptional] = useState<boolean>(true);
  const appContext = useContext(S179Context);
  const data = appContext.data;
  useEffect(() => {
    const liabilitiesTotal =
      data.ActiveLiabilities +
      data.DeferredLiabilities +
      data.PensionerLiabilities +
      data.ExternalLiabilities +
      data.WindingUpLiabilities +
      data.BenefitLiabilities;
    if (liabilitiesTotal >= 1500000000) {
      setOptional(false);
    }
  }, [
    setOptional,
    data.ActiveLiabilities,
    data.DeferredLiabilities,
    data.PensionerLiabilities,
    data.ExternalLiabilities,
    data.WindingUpLiabilities,
    data.BenefitLiabilities,
  ]);
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
        {optional ? (
          <>
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
          </>
        ) : (
          <>
            <Flex className={styles.bespokeInvestmentQuestions}>
              <FFInputCurrency
                before="£"
                name="StressedAssets"
                label="Stressed asset value"
                required
              />
            </Flex>
            <Flex className={styles.bespokeInvestmentQuestions}>
              <FFInputCurrency
                before="£"
                name="UnstressedAssets"
                label="Unstressed asset value"
                required
              />
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
