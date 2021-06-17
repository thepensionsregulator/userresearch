import { Flex, H2, P, Span } from '@tpr/core';
import { FFInputCurrency, FFInputDate, FFInputNumber } from '@tpr/forms';
import { HelpLink } from '@tpr/layout';
import React, { useContext } from 'react';
import { S179Context } from '../Services/S179Context';

export interface AssetsProps {
  dateOfRelevantAccounts?: Date;
}

export const Assets: React.FC<AssetsProps> = ({ dateOfRelevantAccounts }) => {
  const s179Context = useContext(S179Context);
  const data = s179Context.data;
  return (
    <Flex cfg={{ my: 5, flexDirection: 'column' }}>
      <H2 cfg={{ mb: 5 }}>Assets</H2>
      <Flex cfg={{ flexDirection: 'column' }}>
        <Flex cfg={{ flexDirection: 'column' }}>
          <FFInputCurrency
            name="TotalValue"
            before="£"
            label="Total value"
            hint="This figure should not be reduced by the amount of any external liabilities and should include contract of insurance."
            inputWidth={2}
            required
            initialValue={data.TotalValue}
          />

          <Flex cfg={{ p: 6, bg: 'neutral.2', mt: 9, mb: 8 }}>
            {dateOfRelevantAccounts ? (
              <Flex cfg={{ flexDirection: 'column' }}>
                <Span tag="h4">Date of Relevant Accounts</Span>
                <P>{dateOfRelevantAccounts.toLocaleDateString()}</P>
              </Flex>
            ) : (
              <FFInputDate
                name="Date of relevant accounts"
                label="Date of relevant accounts"
                hint="For example, 31 3 2019 or 31 03 2019"
                required
              />
            )}
          </Flex>

          <FFInputNumber
            name="PercentageOfAssets"
            after="%"
            label="Percentage of assets held as contracts of insurance"
            inputWidth={1}
            cfg={{ mb: 1 }}
            initialValue={data.PercentageOfAssets}
          />
          <HelpLink title="Help with percentage of assets held as contracts of insurance">
            HelpLink content
          </HelpLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
