import { Trustee } from '@tpr/layout/lib/components/cards/trustee/context';

interface ITrusteeRepository {
  GetAllTrustees(): Trustee[] | undefined;
  GetTrustee(id: string): Trustee;
  WriteTrustee(trustee: Trustee): void;
  RemoveTrustee(trustee: any): void;
  UpdateTrustee(trustee: any): void;
}

export default ITrusteeRepository;
