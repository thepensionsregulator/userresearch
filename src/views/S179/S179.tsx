import { Flex, H1, Hr, Span } from '@tpr/core';
import { Form } from '@tpr/forms';
import { ArrowLink } from '@tpr/layout';
import React, { useState } from 'react';
import { S179Context, S179Data } from './Services/S179Context';
import { Step1 } from './views/Step1';
import { Step2 } from './views/Step2';
import { Step3 } from './views/Step3';
import styles from './s179.module.scss';

export const S179: React.FC = () => {
  type steps = 'step1' | 'step2' | 'step3';

  const [currentStep, setStep] = useState<steps>('step1');

  const [initialData, setInitialData] = useState<S179Data>({
    effectiveDate: new Date('2021-04-13'),
    guidance: 'G8',
    assumption: 'A8',
    relevantAccounts: new Date('2018-9-30'),
    TotalValue: 34682000.0,
    PercentageOfAssets: -1.6,
    ActiveLiabilities: 1400000000,
    ActiveInsurer: 0,
    ActiveNumber: 0,
    ActiveAge: 0,
    DeferredLiabilities: 22950000,
    DeferredInsurer: 0,
    DeferredNumber: 103,
    DeferredAge: 49,
    PensionerLiabilities: 86994000,
    PensionerInsurer: 83,
    PensionerNumber: 48,
    PensionerAge: 71,
    WindingUpLiabilities: 949000,
    ExternalLiabilities: 0,
    BenefitLiabilities: 135000,
    TotalProtectedLiabilities: 100000,
    ActivePre1997: 0,
    ActivePreApril2009: 0,
    ActivePostApril2009: 0,
    DeferredPre1997: 11,
    DeferredPreApril2009: 74,
    DeferredPostApril2009: 15,
    PensionersPre1997: 29,
    PensionerPost1997: 71,
  });

  const selectForm = (currentStep: steps) => {
    switch (currentStep) {
      case 'step1':
        return <Step1 handleNextClick={() => setStep('step2')} />;
      case 'step2':
        return <Step2 handleNextClick={() => setStep('step3')} />;
      case 'step3':
        return <Step3 />;
      default:
        return;
    }
  };

  const selectHeading = (currentStep: steps) => {
    switch (currentStep) {
      case 'step1':
        return 'Guidance, assumptions and assets';
      case 'step2':
        return 'Liabilities and Proportions';
      case 'step3':
        return 'Bespoke investment risk calculation for PPF purposes';
      default:
        return <></>;
    }
  };

  return (
    <S179Context.Provider
      value={{
        data: initialData,
        setData: () => setInitialData({}),
      }}
    >
      <Flex cfg={{ pt: 8, px: 6, pb: 10, flexDirection: 'column' }}>
        {currentStep === 'step1' ? (
          <ArrowLink
            pointsTo="left"
            iconSide="left"
            cfg={{ mt: 2 }}
            onClick={() => {}}
            title="Back"
          />
        ) : currentStep === 'step2' ? (
          <ArrowLink
            onClick={() => {
              setStep('step1');
            }}
            pointsTo="left"
            iconSide="left"
            cfg={{ mt: 2 }}
            title="Back to last step"
          />
        ) : (
          <ArrowLink
            onClick={() => {
              setStep('step2');
            }}
            pointsTo="left"
            iconSide="left"
            cfg={{ mt: 2 }}
            title="Back to last step"
          >
            Back to last step
          </ArrowLink>
        )}
        <Span
          cfg={{ fontWeight: 2, fontSize: 4, color: 'neutral.6' }}
          className={styles.sectionTitle}
        >
          Add new S179 valuation
        </Span>
        <H1 cfg={{ mt: 1 }}>{selectHeading(currentStep)}</H1>
        <Hr cfg={{ mb: 5 }} />
        <Form
          onSubmit={(values: any) => console.log(values)}
          initialValues={{ ...initialData }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>{selectForm(currentStep)}</form>
          )}
        </Form>
      </Flex>
    </S179Context.Provider>
  );
};
