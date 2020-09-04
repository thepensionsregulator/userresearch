import React from 'react';
import AddressContext from './AddressContext';

const AddressProvider = (props: any) => (
  <AddressContext.Provider value={{}}>{props.children}</AddressContext.Provider>
);

export default AddressProvider;
