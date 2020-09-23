import React, { useContext } from 'react';
import { Flex, P, Link, Hr, H1 } from '@tpr/core';
import { FFSelect, Form } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';
import AddressContext from './AddressContext';

const AddressSelect = (props: {
  postcode: string;
  isPristine: boolean;
  changePostcode: () => void;
  selectAddress: () => void;
  hint?: string;
}) => {
  const placeHolderAddresses = [
    {
      label: 'ACME Acres, First Floor, 123 Any Street, Brighton, BN1 9PR',
      value: {
        addressLine1: 'ACME Acres',
        addressLine2: 'First Floor',
        addressLine3: '123 Any Street',
        postTown: 'Brighton',
        county: 'East Sussex',
        postcode: 'BN1 9PR',
        country: 'UK',
      },
    },
    {
      label: 'University of ACME, ACME House, Trainer Place, Brighton, BN1 9PR',
      value: {
        addressLine1: 'University of ACME',
        addressLine2: 'ACME House',
        addressLine3: 'Trainer Place',
        postTown: 'Brighton',
        county: 'Essex',
        postcode: 'BN1 9PR',
        country: 'UK',
      },
    },
    {
      label:
        'ACME Industries Ltd., ACME Acres, Warner Bros. Place, Brighton, BN1 9PR',
      value: {
        addressLine1: 'ACME Industries Ltd.',
        addressLine2: 'ACME Acres',
        addressLine3: 'Warner Bros. Place',
        postTown: 'Brighton',
        county: 'Essex',
        postcode: 'BN1 9PR',
        country: 'UK',
      },
    },
  ];

  const addressSelectFieldName: string = 'addressSelect';

  return (
    <>
      <Flex cfg={{ bg: 'neutral.3', flexDirection: 'column', p: 6 }}>
        <P tag="b">Postcode</P>
        <Flex cfg={{ mt: 3 }}>
          <P tag="b" cfg={{ mr: 1 }}>
            {props.postcode}
          </P>
          <Link underline={true} onClick={() => props.changePostcode()}>
            Change
          </Link>
        </Flex>
      </Flex>
      <FFSelect
        name={addressSelectFieldName}
        label="Address"
        options={[...placeHolderAddresses]}
        hint={props.hint}
        cfg={{ my: 4 }}
      />
      <Hr cfg={{ mt: 4, mb: 5 }} />
      <Flex>
        <ArrowButton
          onClick={() => props.selectAddress()}
          iconSide="right"
          pointsTo="right"
          title="Continue"
          disabled={props.isPristine}
        />
      </Flex>
    </>
  );
};

export default AddressSelect;
