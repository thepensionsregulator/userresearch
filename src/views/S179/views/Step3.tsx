import { Hr } from '@tpr/core';
import { ArrowButton } from '@tpr/layout';
import React from 'react';
import { BespokeInvestment } from '../BespokeInvestment/BespokeInvestment';

export interface Step3Props {}

export const Step3: React.FC<Step3Props> = () => {
  return (
    <>
      <BespokeInvestment />
      <Hr cfg={{ my: 8 }} />
      <ArrowButton
        type="submit"
        iconSide="right"
        pointsTo="right"
        title="Save and Continue"
      />
    </>
  );
};
