import ITrusteeRepository from './ITrusteeRepository';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import Data from '../data.json';

class TrusteeRepository implements ITrusteeRepository {
  WriteTrustee(trustee: TrusteeInput): void {
    const toWrite = {
      ...trustee,
      id: this.getRandomInt(1000).toString(),
      effectiveDate: new Date().toString(),
      schemeRoleId: this.getRandomInt(1000).toString(),
    };

    Data.trustees.push(toWrite);
  }
  GetAllTrustees(): TrusteeInput[] {
    const trustees = Data.trustees;
    return trustees;
  }

  GetTrustee(id: string): TrusteeInput {
    const trustee = Data.trustees.find((x) => x.id === id);
    return trustee;
  }

  getRandomInt(maxInt: number) {
    return Math.floor(Math.random() * maxInt);
  }
}
export default new TrusteeRepository();
