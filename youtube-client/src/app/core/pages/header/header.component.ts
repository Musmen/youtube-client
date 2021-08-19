import { Component } from '@angular/core';

import { StateService } from '@core/services/state/state.service';
import { LoginService } from '@app/auth/services/login/login.service';

import UserModel from '@app/auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private _stateService: StateService,
    private _loginService: LoginService,
  ) { }

  get userLogin(): UserModel['login'] {
    return this._loginService.getUserLogin();
  }

  get isUserLogged(): boolean {
    return this._loginService.checkIsUserLogged();
  }

  setSearchValue(searchValue: string): void {
    this._stateService.setSearchValue(searchValue);
  }

  toggleSortingPanel(): void {
    this._stateService.toggleSortingPanel();
  }

  goToLoginPage(): void {
    this._loginService.goToLoginPage();
  }

  logout(): void {
    this._loginService.logout();
  }
}
