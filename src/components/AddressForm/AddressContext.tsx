import React from 'react';

const AddressContext = React.createContext({
  addressLine1: '',
  setAddressLine1: (addressLine1: string) => {},
  addressLine2: '',
  setAddressLine2: (addressLine2: string) => {},
  addressLine3: '',
  setAddressLine3: (addressLine3: string) => {},
  postTown: '',
  setPostTown: (postTown: string) => {},
  county: '',
  setCounty: (county: string) => {},
  postcode: '',
  setPostcode: (postcode: string) => {},
  country: 'UK',
  setCountry: (country: string) => {},
});

export default AddressContext;
