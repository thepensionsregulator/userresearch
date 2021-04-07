import { Flex, Span } from '@tpr/core';
import { FFInputDate } from '@tpr/forms';
import React from 'react';

export const EffectiveDate: React.FC = () => {
  return (
    <Flex cfg={{ flexDirection: 'column', bg: 'neutral.2', p: 5 }}>
      <Span tag="h4">Effective date of current S179 valuation</Span>
      <FFInputDate
        name="EffectiveDate"
        hint="For example, 31 3 2019 or 21 03 2019"
      />
    </Flex>
  );
};
