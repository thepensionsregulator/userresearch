import { Button, Flex, Hr } from '@tpr/core';
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
      <Hr cfg={{ my: 8 }} />
      <Flex>
        <Button type="button" cfg={{ my: 3 }} onClick={handleNextClick}>
          Continue
        </Button>
      </Flex>
    </>
  );
};
