import Trustee from '../entities/Trustee';

interface ITrusteeRepository {
  GetAllTrustees(): Trustee[];
  GetTrustee(id: string): Trustee;
}

export default ITrusteeRepository;
