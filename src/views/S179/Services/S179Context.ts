import { createContext } from 'react';

export const S179Context = createContext<S179Context>({
  data: {},
  setData: () => {},
});

export interface S179Context {
  data: S179Data;
  setData: () => void;
}

export interface S179Data {
  effectiveDate?: Date;
  guidance?: string;
  assumption?: string;
  relevantAccounts?: Date;
  TotalValue?: number;
  PercentageOfAssets?: number;
  ActiveLiabilities?: number;
  ActiveInsurer?: number;
  ActiveNumber?: number;
  ActiveAge?: number;
  DeferredLiabilities?: number;
  DeferredInsurer?: number;
  DeferredNumber?: number;
  DeferredAge?: number;
  PensionerLiabilities?: number;
  PensionerInsurer?: number;
  PensionerNumber?: number;
  PensionerAge?: number;
  WindingUpLiabilities?: number;
  ExternalLiabilities?: number;
  BenefitLiabilities?: number;
  TotalProtectedLiabilities?: number;
  ActivePre1997?: number;
  ActivePreApril2009?: number;
  ActivePostApril2009?: number;
  DeferredPre1997?: number;
  DeferredPreApril2009?: number;
  DeferredPostApril2009?: number;
  PensionersPre1997?: number;
  PensionerPost2009?: number;
}
