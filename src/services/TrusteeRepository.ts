import ITrusteeRepository from './ITrusteeRepository';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import Data from '../data.json';

class TrusteeRepository implements ITrusteeRepository {
  WriteTrustee(trustee: TrusteeInput): void {
    const toWrite = {
      ...trustee,
      id: getRandomInt(1000).toString(),
      effectiveDate: new Date().toString(),
      schemeRoleId: getRandomInt(1000).toString(),
    };

    Data.trustees.push(toWrite);
  }
  GetAllTrustees(): TrusteeInput[] {
    const trustees = Data.trustees;
    return trustees;
  }

  GetTrustee(id: string): TrusteeInput {
    return Data.trustees[0];
  }
function getRandomInt(maxInt: number) {
  return Math.floor(Math.random() * maxInt);
}

export default new TrusteeRepository();
