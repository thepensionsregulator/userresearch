import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';

interface ITrusteeRepository {
  GetAllTrustees(): TrusteeInput[] | undefined;
  GetTrustee(id: string): TrusteeInput;
}

export default ITrusteeRepository;
