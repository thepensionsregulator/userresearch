import ITrusteeRepository from './ITrusteeRepository';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import Data from '../data.json';

class TrusteeRepository implements ITrusteeRepository {
  GetAllTrustees(): TrusteeInput[] {
    const trustees = Data.trustees;
    return trustees;
  }

  GetTrustee(id: string): TrusteeInput {
    return Data.trustees[0];
  }
}

export default new TrusteeRepository();
