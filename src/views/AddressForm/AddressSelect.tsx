import React from 'react';
import { Flex, P, Link, Hr, Button } from '@tpr/core';
import { FFSelect } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';

const AddressSelect = (props: any) => {
  return (
    <div>
      <Flex cfg={{ bg: 'neutral.3', flexDirection: 'column', p: 6 }}>
        <P tag="b">Postcode</P>
        <Flex cfg={{ mt: 3 }}>
          <P tag="b">{props.postcode || 'CM12 0AG'}</P>
          <Link underline={true} onClick={() => props.prevStep()}>
            Change
          </Link>
        </Flex>
      </Flex>
      <FFSelect
        name="addressSelect"
        label="select an address"
        options={[
          {
            label: '50 Cromwell Ave',
            value: { addressLine1: '50 Cromwell Ave' },
          },
        ]}
      />
      <Hr />
      <ArrowButton
        onClick={() => {
          props.nextStep();
        }}
        iconSide="right"
        pointsTo="right"
        title="Continue"
      />
    </div>
  );
};

export default AddressSelect;
