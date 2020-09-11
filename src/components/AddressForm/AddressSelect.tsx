import React, { useContext } from 'react';
import { Flex, P, Link, Hr } from '@tpr/core';
import { FFSelect, Form } from '@tpr/forms';
import { ArrowButton } from '@tpr/layout';
import AddressContext from './AddressContext';

const AddressSelect = (props: any) => {
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

  const addressContext = useContext(AddressContext);

  const onSubmit = (values: any) => {
    addressContext.setAddressLine1(values.addressSelect.value.addressLine1);
    addressContext.setAddressLine2(values.addressSelect.value.addressLine2);
    addressContext.setAddressLine3(values.addressSelect.value.addressLine3);
    addressContext.setPostTown(values.addressSelect.value.postTown);
    addressContext.setPostcode(values.addressSelect.value.postcode);
    addressContext.setCounty(values.addressSelect.value.county);
    addressContext.setCountry(values.addressSelect.value.country);
    props.nextStep();
  };

  return (
    <Form
      onSubmit={(values: any) => {
        onSubmit(values);
      }}
      initialValues={{
        [addressSelectFieldName]: {
          label: `${placeHolderAddresses.length} addresses found`,
          value: undefined,
        },
      }}
    >
      {({ handleSubmit, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Flex cfg={{ bg: 'neutral.3', flexDirection: 'column', p: 6 }}>
            <P tag="b">Postcode</P>
            <Flex cfg={{ mt: 3 }}>
              <P tag="b" cfg={{ mr: 1 }}>
                {addressContext.postcode}
              </P>
              <Link underline={true} onClick={() => props.prevStep()}>
                Change
              </Link>
            </Flex>
          </Flex>
          <FFSelect
            name={addressSelectFieldName}
            label="select an address"
            options={[...placeHolderAddresses]}
          />
          <Hr cfg={{ mt: 4, mb: 5 }} />
          <ArrowButton
            type="submit"
            iconSide="right"
            pointsTo="right"
            title="Continue"
            disabled={pristine}
          />
        </form>
      )}
    </Form>
  );
};

export default AddressSelect;
