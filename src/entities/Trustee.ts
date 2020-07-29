interface Trustee {
  id: string;
  schemeRoleId: string;
  title: string;
  firstName: string;
  lastName: string;
  trusteeType: string;
  isProfessionalType: boolean;
  addressLine1: string;
  addressLine2: string | undefined;
  addressLine3: string | undefined;
  postTown: string;
  county: string | undefined;
  countryId: string | undefined;
  telephoneNumber: string;
  emailAddress: string;
  effectiveDate: Date;
}

export default Trustee;
