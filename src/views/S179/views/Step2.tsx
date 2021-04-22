import { Flex, Hr } from '@tpr/core';
import { ArrowButton } from '@tpr/layout';
import React from 'react';
import { Liabilities } from '../Liabilities/Liabilities';
import { ProportionOfLiabilities } from '../ProportionOfLiabilities/ProportionOfLiabilities';

export interface Step2Props {
  handleNextClick: () => void;
}

export const Step2: React.FC<Step2Props> = ({ handleNextClick }) => {
  return (
    <>
      <Liabilities />
      <ProportionOfLiabilities />
      <Hr cfg={{ mt: 9, mb: 7 }} />
      <Flex>
        <ArrowButton
          type="button"
          cfg={{ my: 3 }}
          onClick={handleNextClick}
          title="Continue"
          iconSide="right"
          pointsTo="right"
        />
      </Flex>
    </>
  );
};
