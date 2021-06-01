import { Hr } from '@tpr/core';
import { ArrowButton } from '@tpr/layout';
import React from 'react';
import { BespokeInvestment } from '../BespokeInvestment/BespokeInvestment';

export interface Step3Props {
  handleNextClick: () => void;
}

export const Step3: React.FC<Step3Props> = ({ handleNextClick }) => {
  return (
    <>
      <BespokeInvestment />
      <Hr cfg={{ my: 8 }} />
      <ArrowButton
        type="submit"
        iconSide="right"
        pointsTo="right"
        title="Save and Continue"
        onClick={handleNextClick}
      />
    </>
  );
};
