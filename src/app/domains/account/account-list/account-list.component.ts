import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { IAccount } from '../models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  accounts: IAccount[] = [];
  public loggedInUser: string = '';
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    let context = Xrm.Utility.getGlobalContext();
    this.loggedInUser = context.userSettings.userName;
  }

  loadAccounts() {
    // this.accountService.getAccountNames().then((accounts) => {
    //   this.accounts = accounts;
    //   console.log('adsa', this.accounts);
    // });
    this.accountService.getNamesAndLog();
  }
}
