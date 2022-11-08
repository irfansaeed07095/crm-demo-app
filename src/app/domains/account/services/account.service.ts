import { ICrmResponse } from './../models/account';
import { Injectable } from '@angular/core';
import { IAccount } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  async getAccountNames(): Promise<IAccount[]> {
    return Xrm.WebApi.retrieveMultipleRecords(
      'accounts',
      '?$select=name&$top=3'
    ).then((response: ICrmResponse) =>
      response.entities.map((e: any) => e.name)
    );
  }

  getAccountNamesDummy(): Promise<IAccount[]> {
    return Promise.resolve([{ Name: 'irfan saeed' }, { Name: 'james bond' }]);
  }

  getNamesAndLog() {
    Xrm.WebApi.retrieveMultipleRecords('Account', '?$select=name&$top=3').then(
      (response: any) => console.log('result', response),
      (error) => console.log('error', error)
    );
  }
}
