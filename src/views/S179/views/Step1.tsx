import { Button, Hr } from '@tpr/core';
import React from 'react';
import { Assets } from '../Assets/Assets';
import { EffectiveDate } from '../EffectiveDate/EffectiveDate';
import { GuidanceAndAssumptions } from '../GuidanceAndAssumptions/GuidanceAndAssumptions';

export interface Step1Props {
  handleNextClick: () => void;
}

export const Step1: React.FC<Step1Props> = ({ handleNextClick }) => {
  return (
    <>
      <EffectiveDate />
      <GuidanceAndAssumptions />
      <Assets />
      <Hr cfg={{ my: 8 }} />
      <Button type="button" onClick={handleNextClick} cfg={{ mb: 4 }}>
        Continue
      </Button>
    </>
  );
};
