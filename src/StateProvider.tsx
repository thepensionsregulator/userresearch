import { CardAddress } from '@tpr/layout/lib/components/cards/common/interfaces';
import React, { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = (props: any) => {
  const [psr, setPsr] = useState(1000100398);
  const [schemeName, setSchemeName] = useState('The Top Pension Scheme');
  const [schemeAddress, setSchemeAddress] = useState<CardAddress>({
    addressLine1: 'The Pensions Regulator',
    addressLine2: 'Napier House',
    addressLine3: 'Trafalgar Place',
    postTown: 'Brighton',
    county: 'East Sussex',
    postcode: 'BN1 4DW',
    country: 'GB',
    countryId: 2,
  });
  const [activeMembers, setActiveMembers] = useState(30);
  const [deferredMembers, setDeferredMembers] = useState(20);
  const [membershipEffective, setMembershipEffective] = useState(
    new Date('2018-04-19'),
  );
  const [pensionerMembers, setPensionerMembers] = useState(100);
  const [schemeStatus, setSchemeStatus] = useState('open');
  const [schemeStatusApplied, setSchemeStatusApplied] = useState(
    new Date('2019-04-11'),
  );
  const [totalMembers, setTotalMembers] = useState(150);
  const [electronicConsent, setElectronicConsent] = useState('yes');

  return (
    <StateContext.Provider
      value={{
        psr,
        setPsr,
        schemeName,
        setSchemeName,
        schemeAddress,
        setSchemeAddress,
        activeMembers,
        setActiveMembers,
        deferredMembers,
        setDeferredMembers,
        membershipEffective,
        setMembershipEffective: (newDate: string) =>
          setMembershipEffective(new Date(newDate)),
        pensionerMembers,
        setPensionerMembers,
        schemeStatus,
        setSchemeStatus,
        schemeStatusApplied,
        setSchemeStatusApplied: (newDate: string) =>
          setSchemeStatusApplied(new Date(newDate)),
        totalMembers,
        setTotalMembers,
        electronicConsent,
        setElectronicConsent,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
