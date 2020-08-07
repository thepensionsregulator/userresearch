import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';

interface ITrusteeRepository {
  GetAllTrustees(): TrusteeInput[] | undefined;
  GetTrustee(id: string): TrusteeInput;
  WriteTrustee(trustee: TrusteeInput): void;
  RemoveTrustee(trustee: any): void;
  UpdateTrustee(trustee: any): void;
}

export default ITrusteeRepository;
