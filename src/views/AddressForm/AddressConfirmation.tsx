import React from 'react';
import { Flex, P, Link, H3 } from '@tpr/core';
import { FFInputText } from '@tpr/forms';

const AddressConfirmation = (props: any) => {
  return (
    <Flex cfg={{ flexDirection: 'column' }}>
      <H3>Trustee correspondence address</H3>
      <P>
        We'll use this address when we need to get in touch with this trustee.
      </P>
      <FFInputText name="addressLine1" label="Address line 1" />
      <FFInputText name="addressLine2" label="Address line 2" />
      <FFInputText name="addressLine3" label="Address line 3" />
      <P>Post town</P>
      <P>{props.posttown || 'Billericay'}</P>
      <P>County</P>
      <P>{props.county || 'Essex'}</P>
      <P>Postcode</P>
      <P>{props.postcode || 'CM12 0AG'}</P>
      <P>Country</P>
      <P>Uk</P>
      <Link
        underline
        onClick={() => {
          props.firstStep();
        }}
      >
        I need to change the address
      </Link>
    </Flex>
  );
};

export default AddressConfirmation;
