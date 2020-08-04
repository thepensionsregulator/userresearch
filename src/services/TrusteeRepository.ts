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

  RemoveTrustee(trustee: any) {
    const trusteeToRemove = Data.trustees.findIndex((x) => x.id === trustee.id);

    if (trusteeToRemove > -1) {
      Data.trustees.splice(trusteeToRemove, 1);
    }
  }

  UpdateTrustee(trustee: any) {
    const trusteeToUpdate = Data.trustees.findIndex((x) => x.id === trustee.id);

    if (trusteeToUpdate > -1) {
      Data.trustees[trusteeToUpdate] = trustee;
    }
  }

  getRandomInt(maxInt: number) {
    return Math.floor(Math.random() * maxInt);
  }
}
export default new TrusteeRepository();
