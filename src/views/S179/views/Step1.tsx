import { Hr, P } from '@tpr/core';
import { ArrowButton } from '@tpr/layout';
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
      <P cfg={{ mb: 7 }}>
        The information in this section must be the same as the
        <strong> most recent</strong> Section 179 (S179) certificate in the
        scheme actuary's report to the trustees.
      </P>
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
      <ArrowButton
        type="button"
        onClick={handleNextClick}
        cfg={{ mb: 4 }}
        pointsTo="right"
        iconSide="right"
        title="Continue"
      />
    </>
  );
};
