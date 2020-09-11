import React, { useContext } from 'react';
import { Flex, P, Link, H3, Hr } from '@tpr/core';
import { Form, FieldProps, renderFields } from '@tpr/forms';

import { ArrowButton } from '@tpr/layout';
import AddressContext from './AddressContext';
import { CardAddress } from '@tpr/layout/lib/components/cards/common/interfaces';
const AddressConfirmation = (props: {
  firstStep: () => void;
  saveAddress: (address: CardAddress) => void;
  nextStep: () => void;
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

  const addressContext = useContext(AddressContext);

  const onSubmit = (values: any) => {
    addressContext.setAddressLine1(values.addressLine1);
    addressContext.setAddressLine2(values.addressLine2);
    props.saveAddress({
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      addressLine3: addressContext.addressLine3,
      postTown: addressContext.postTown,
      postcode: addressContext.postcode,
      county: addressContext.county,
      country: addressContext.country,
      countryId: addressContext.country,
    });
    props.nextStep();
  };

  return (
    <Form
      onSubmit={(values: any) => onSubmit(values)}
      initialValues={{
        [addressLine1FieldName]: addressContext.addressLine1,
        [addressLine2FieldName]: addressContext.addressLine2,
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Flex cfg={{ flexDirection: 'column' }}>
            <H3>Trustee correspondence address</H3>
            <P>
              We'll use this address when we need to get in touch with this
              trustee.
            </P>
            {renderFields(addressFields)}
            <P cfg={{ mt: 2 }}>Address line 3</P>
            <P cfg={{ mt: 1 }}>{addressContext.addressLine3}</P>
            <P cfg={{ mt: 6 }}>Post Town</P>
            <P cfg={{ mt: 1 }}>{addressContext.postTown}</P>
            <P cfg={{ mt: 6 }}>County</P>
            <P cfg={{ mt: 1 }}>{addressContext.county}</P>
            <P cfg={{ mt: 6 }}>Postcode</P>
            <P cfg={{ mt: 1 }}>{addressContext.postcode}</P>
            <P cfg={{ mt: 6 }}>Country</P>
            <P cfg={{ mt: 1 }}>{addressContext.country}</P>
            <Flex cfg={{ justifyContent: 'flex-start' }}>
              <Link
                underline
                onClick={() => {
                  props.firstStep();
                }}
              >
                I need to change the address
              </Link>
            </Flex>
          </Flex>
          <Hr cfg={{ mt: 4, mb: 5 }} />
          <ArrowButton
            type="submit"
            title="Save and continue"
            iconSide="right"
            pointsTo="right"
          />
        </form>
      )}
    </Form>
  );
};

export default AddressConfirmation;
