import ITrusteeRepository from './ITrusteeRepository';
import { TrusteeInput } from '@tpr/layout/lib/components/cards/trustee/context';
import axios, { AxiosInstance } from 'axios';

class TrusteeRepository implements ITrusteeRepository {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create();
  }
  GetAllTrustees(): TrusteeInput[] {
    const result = this.instance
      .get('./data.json')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    const trustees: TrusteeInput[] = [
      {
        id: '1234',
        schemeRoleId: '4321',
        title: 'Mr',
        firstname: 'Robert',
        lastname: 'Robertson',
        trusteeType: 'member-nominated',
        isProfessionalTrustee: false,
        addressLine1: 'The Pensions Regulator',
        addressLine2: 'Napier House',
        addressLine3: 'Trafalgar Place',
        postTown: 'Brighton',
        postcode: 'Bn1 4DW',
        county: 'East Sussex',
        countryId: '',
        telephoneNumber: '01277 000111',
        emailAddress: 'rob.robertson@tpr.uk',
        effectiveDate: '1997-04-01T00:00:00',
      },
    ];

    return trustees;
  }

  GetTrustee(id: string): TrusteeInput {
    throw new Error('Method not implemented.');
  }
}

export default new TrusteeRepository();
