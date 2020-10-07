import { CardAddress } from '@tpr/layout/lib/components/cards/common/interfaces';
import React from 'react';

const StateContext = React.createContext({
  psr: 100004342,
  setPsr: (newPsr: number) => {},
  schemeName: 'The Top Pension Scheme',
  setSchemeName: (schemeName: string) => {},
  schemeAddress: {
    addressLine1: 'The Pensions Regulator',
    addressLine2: 'Napier House',
    addressLine3: 'Trafalgar Place',
    postTown: 'Brighton',
    county: 'East Sussex',
    postcode: 'BN1 4DW',
    country: 'GB',
    countryId: 12,
  },
  setSchemeAddress: (address: CardAddress) => {},
  activeMembers: 10,
  setActiveMembers: (activeMembers: number) => {},
  deferredMembers: 10,
  setDeferredMembers: (activeMembers: number) => {},
  membershipEffective: new Date('2017-03-10'),
  setMembershipEffective: (newDate: string) => {},
  pensionerMembers: 10,
  setPensionerMembers: (pensionerMembers: number) => {},
  schemeStatus: 'open',
  setSchemeStatus: (schemeStatus: string) => {},
  schemeStatusApplied: new Date('2018-03-10'),
  setSchemeStatusApplied: (schemeStatusApplied: string) => {},
  totalMembers: 30,
  setTotalMembers: (totalMembers: number) => {},
  electronicConsent: 'no',
  setElectronicConsent: (electronicConsent: string) => {},
});

export default StateContext;
