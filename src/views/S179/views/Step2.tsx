import { Button, Flex, Hr } from '@tpr/core';
import React from 'react';
import { Liabilities } from '../Liabilities/Liabilities';
import { ProportionOfLiabilities } from '../ProportionOfLiabilities/ProportionOfLiabilities';

export interface Step2Props {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

export const Step2: React.FC<Step2Props> = ({
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <>
      <Liabilities />
      <ProportionOfLiabilities />
      <Hr cfg={{ my: 8 }} />
      <Flex>
        <Button type="button" cfg={{ my: 3, mr: 4 }} onClick={handlePrevClick}>
          Back
        </Button>
        <Button type="button" cfg={{ my: 3 }} onClick={handleNextClick}>
          Continue
        </Button>
      </Flex>
    </>
  );
};
