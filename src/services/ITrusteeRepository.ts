import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';

interface ITrusteeRepository {
  GetAllTrustees(): TrusteeInput[];
  GetTrustee(id: string): TrusteeInput;
}

export default ITrusteeRepository;
