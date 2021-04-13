import { H1, Hr, P } from '@tpr/core';
import { Form } from '@tpr/forms';
import React, { useState } from 'react';
import { Step1 } from './views/Step1';
import { Step2 } from './views/Step2';
import { Step3 } from './views/Step3';

export const S179: React.FC = () => {
  const [step, setStep] = useState<'step1' | 'step2' | 'step3'>('step1');

  const selectStep = () => {
    switch (step) {
      case 'step1':
        return <Step1 handleNextClick={() => setStep('step2')} />;
      case 'step2':
        return (
          <Step2
            handlePrevClick={() => setStep('step1')}
            handleNextClick={() => setStep('step3')}
          />
        );
      case 'step3':
        return <Step3 handlePrevClick={() => setStep('step2')} />;
      default:
        return;
    }
  };

  return (
    <>
      <H1>S179 Valuation</H1>
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
