import { Flex, Link, P, Span } from '@tpr/core';
import { FFInputDate } from '@tpr/forms';
import React from 'react';

export interface EffectiveDateProps {
  effectiveDate?: Date;
  handleNewS179: () => void;
}

export const EffectiveDate: React.FC<EffectiveDateProps> = ({
  effectiveDate,
  handleNewS179,
}) => {
  return (
    <Flex cfg={{ flexDirection: 'column', bg: 'neutral.2', p: 5 }}>
      <Span tag="h4">Effective date of current S179 valuation</Span>

      {effectiveDate ? (
        <Flex cfg={{ justifyContent: 'space-between' }}>
          <P>{effectiveDate.toLocaleDateString()}</P>
          <Link onClick={handleNewS179} underline>
            + Add new S179 valuation
          </Link>
        </Flex>
      ) : (
        <FFInputDate
          name="EffectiveDate"
          hint="For example, 31 3 2019 or 21 03 2019"
        />
      )}
    </Flex>
  );
};
