import { Button, H1, Hr, P } from '@tpr/core';
import { Form } from '@tpr/forms';
import React, { useState } from 'react';
import { Assets } from './Assets/Assets';
import { BespokeInvestment } from './BespokeInvestment/BespokeInvestment';
import { EffectiveDate } from './EffectiveDate/EffectiveDate';
import { GuidanceAndAssumptions } from './GuidanceAndAssumptions/GuidanceAndAssumptions';
import { Liabilities } from './Liabilities/Liabilities';
import { ProportionOfLiabilities } from './ProportionOfLiabilities/ProportionOfLiabilities';

export const S179: React.FC = () => {
  const [step, setStep] = useState<'step1' | 'step2'>('step1');

  const selectStep = () => {
    switch (step) {
      case 'step1':
        return (
          <>
            <EffectiveDate />
            <GuidanceAndAssumptions />
            <Assets />
            <Hr cfg={{ my: 8 }} />
            <Button type="button" onClick={() => setStep('step2')}>
              Continue
            </Button>
          </>
        );
      case 'step2':
        return (
          <>
            <Liabilities />
            <ProportionOfLiabilities />
            <BespokeInvestment />
            <Button type="submit" cfg={{ my: 3 }}>
              Save and Continue
            </Button>
          </>
        );
      default:
        return;
    }
  };

  return (
    <>
      <H1>S179 Grid Spike</H1>
      <P>A prototype of a multi-page, grid style S179 page.</P>
      <Hr cfg={{ mb: 5 }} />
      <Form onSubmit={(values: any) => console.log(values)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>{selectStep()}</form>
        )}
      </Form>
    </>
  );
};
