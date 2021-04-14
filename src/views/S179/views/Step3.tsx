import { Button, Hr } from '@tpr/core';
import React from 'react';
import { BespokeInvestment } from '../BespokeInvestment/BespokeInvestment';

export interface Step3Props {
  handlePrevClick: () => void;
}

export const Step3: React.FC<Step3Props> = ({ handlePrevClick }) => {
  return (
    <>
      <BespokeInvestment />
      <Hr cfg={{ my: 8 }} />
      <Button type="button" cfg={{ my: 3, mr: 4 }} onClick={handlePrevClick}>
        Back
      </Button>
      <Button type="submit">Save and Continue</Button>
    </>
  );
};
