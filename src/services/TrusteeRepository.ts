import ITrusteeRepository from './ITrusteeRepository';
import { Trustee } from '@tpr/layout/lib/components/cards/trustee/context';
import Data from '../data.json';

class TrusteeRepository implements ITrusteeRepository {
  WriteTrustee(trustee: Trustee): void {
    const toWrite = {
      ...trustee,
      id: this.getRandomInt(1000).toString(),
      effectiveDate: new Date().toString(),
      schemeRoleId: this.getRandomInt(1000),
    };
    Data.trustees.push(toWrite);
  }

  GetAllTrustees(): Trustee[] {
    const trustees: Trustee[] = Data.trustees;
    return trustees;
  }

  GetTrustee(id: string): Trustee {
    const result = Data.trustees.find((x) => x.id === id);
    const trustee: Trustee = { ...result };
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
