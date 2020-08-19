import React from 'react';

const StateContext = React.createContext({
  psr: 100004342,
  setPsr: (newPsr: number) => {},
  schemeName: 'The Top Pension Scheme',
  setSchemeName: (schemeName: string) => {},
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
