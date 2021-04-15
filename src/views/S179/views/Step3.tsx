import { Button, Hr } from '@tpr/core';
import React from 'react';
import { BespokeInvestment } from '../BespokeInvestment/BespokeInvestment';

export interface Step3Props {}

export const Step3: React.FC<Step3Props> = () => {
  return (
    <>
      <BespokeInvestment />
      <Hr cfg={{ my: 8 }} />
      <Button type="submit">Save and Continue</Button>
    </>
  );
};
