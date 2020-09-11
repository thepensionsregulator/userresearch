import React, { useState } from 'react';
import AddressContext from './AddressContext';

const AddressProvider = (props: any) => {
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [addressLine3, setAddressLine3] = useState<string>('');
  const [postTown, setPostTown] = useState<string>('');
  const [county, setCounty] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  return (
    <AddressContext.Provider
      value={{
        addressLine1,
        setAddressLine1,
        addressLine2,
        setAddressLine2,
        addressLine3,
        setAddressLine3,
        postTown,
        setPostTown,
        county,
        setCounty,
        postcode,
        setPostcode,
        country,
        setCountry,
      }}
    >
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
