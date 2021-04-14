import { Button, Hr } from '@tpr/core';
import React, { useContext } from 'react';
import { Assets } from '../Assets/Assets';
import { EffectiveDate } from '../EffectiveDate/EffectiveDate';
import { GuidanceAndAssumptions } from '../GuidanceAndAssumptions/GuidanceAndAssumptions';
import { S179Context } from '../Services/S179Context';

export interface Step1Props {
  handleNextClick: () => void;
}

export const Step1: React.FC<Step1Props> = ({ handleNextClick }) => {
  const s179Context = useContext(S179Context);
  return (
    <>
      <EffectiveDate
        effectiveDate={s179Context.data.effectiveDate}
        handleNewS179={s179Context.setData}
      />
      <GuidanceAndAssumptions
        guidance={s179Context.data.guidance}
        assumption={s179Context.data.assumption}
      />
      <Assets dateOfRelevantAccounts={s179Context.data.relevantAccounts} />
      <Hr cfg={{ my: 8 }} />
      <Button type="button" onClick={handleNextClick} cfg={{ mb: 4 }}>
        Continue
      </Button>
    </>
  );
};
