import React from 'react';
import { Flex, P, Link, Hr, H4 } from '@tpr/core';
import { FieldProps, renderFields } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';
import { CardAddress } from '@tpr/layout/lib/components/cards/common/interfaces';

const AddressConfirmation = (props: {
  address: CardAddress;
  changeAddress: () => void;
  title?: string;
  helpText?: string;
}) => {
  const addressLine1FieldName = 'addressLine1';
  const addressLine2FieldName = 'addressLine2';

  const addressFields: FieldProps[] = [
    {
      type: 'text',
      name: addressLine1FieldName,
      label: 'Address Line 1',
      validate: (value) => {
        if (!value) return 'Address Line 1 required';
      },
    },
    { type: 'text', name: addressLine2FieldName, label: 'Address Line 2' },
  ];

  return (
    <>
      <Flex cfg={{ flexDirection: 'column' }}>
        {props.title ? <H4 cfg={{ mb: 1 }}>{props.title}</H4> : <></>}
        {props.helpText ? <P cfg={{ mb: 4 }}>{props.helpText}</P> : <></>}
        {renderFields(addressFields)}
        <P cfg={{ mt: 2 }}>Address line 3</P>
        <P cfg={{ mt: 1 }}>{props.address.addressLine3}</P>
        <P cfg={{ mt: 6 }}>Post Town</P>
        <P cfg={{ mt: 1 }}>{props.address.postTown}</P>
        <P cfg={{ mt: 6 }}>County</P>
        <P cfg={{ mt: 1 }}>{props.address.county}</P>
        <P cfg={{ mt: 6 }}>Postcode</P>
        <P cfg={{ mt: 1 }}>{props.address.postcode}</P>
        <P cfg={{ mt: 6 }}>Country</P>
        <P cfg={{ mt: 1 }}>{props.address.country}</P>
        <Flex cfg={{ justifyContent: 'flex-start' }}>
          <Link
            underline
            onClick={() => {
              props.changeAddress();
            }}
          >
            I need to change the address
          </Link>
        </Flex>
      </Flex>
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Flex>
        <ArrowButton
          type="submit"
          title="Save and continue"
          iconSide="right"
          pointsTo="right"
        />
      </Flex>
    </>
  );
};

export default AddressConfirmation;
