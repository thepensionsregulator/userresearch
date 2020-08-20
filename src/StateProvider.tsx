import React, { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = (props: any) => {
  const [psr, setPsr] = useState(1000100398);
  const [schemeName, setSchemeName] = useState('The Top Pension Scheme');
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
        setPsr: (newPsr) => {
          setPsr(newPsr);
        },
        schemeName,
        setSchemeName: (schemeName: string) => {
          setSchemeName(schemeName);
        },
        activeMembers,
        setActiveMembers: (activeMembers: number) => {
          setActiveMembers(activeMembers);
        },
        deferredMembers,
        setDeferredMembers: (deferredMembers: number) => {
          setDeferredMembers(deferredMembers);
        },
        membershipEffective,
        setMembershipEffective: (membershipEffective: string) => {
          setMembershipEffective(new Date(membershipEffective));
        },
        pensionerMembers,
        setPensionerMembers: (pensionerMembers: number) => {
          setPensionerMembers(pensionerMembers);
        },
        schemeStatus,
        setSchemeStatus: (schemeStatus: string) => {
          setSchemeStatus(schemeStatus);
        },
        schemeStatusApplied,
        setSchemeStatusApplied: (schemeStatusApplied: string) => {
          setSchemeStatusApplied(new Date(schemeStatusApplied));
        },
        totalMembers,
        setTotalMembers: (totalMembers: number) => {
          setTotalMembers(totalMembers);
        },
        electronicConsent,
        setElectronicConsent: (consent: string) => {
          setElectronicConsent(consent);
        },
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
