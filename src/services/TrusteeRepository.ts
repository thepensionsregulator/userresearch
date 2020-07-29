import ITrusteeRepository from './ITrusteeRepository';

import AxiosInstance from 'axios';
import { Trustee } from '../entities/Trustee';

class TrusteeRepository implements ITrusteeRepository {
    AxiosInstance axios;
  GetAllTrustees(): Trustee[] {
    throw new Error('Method not implemented');
  }
  GetTrustee(id: string): Trustee {
    throw new Error('Method not implemented.');
  }
}

export default new TrusteeRepository();
