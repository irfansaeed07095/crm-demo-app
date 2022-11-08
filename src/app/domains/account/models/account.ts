export interface IAccount {
  //   AccountId: number;
  Name: string;
  //   AccountNumber: string;
  //   AccountRatingCode: string;
  //   Address1_Composite: string;
  //   Address1_AddressTypeCode: string;
  //   Address1_City: string;
  //   Address1_Country: string;
  //   Address1_StateOrProvince: string;
  //   Address1_Line1: string;
  //   Address1_Line2: string;
  //   Address1_PostalCode: string;
}

export interface ICrmResponse {
  entities: IAccount[];
}
