import { Component } from '@angular/core';

import { StateService } from '@core/services/state/state.service';
import { LoginService } from '@app/auth/services/login/login.service';

import UserModel from '@app/auth/models/user.model';
import { DEFAULT_USER_LOGIN_TITLE } from '@common/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _stateService: StateService, private _loginService: LoginService) { }

  toggleSortingPanel(): void {
    this._stateService.toggleSortingPanel();
  }

  get searchValue(): string {
    return this._stateService.getSearchValue();
  }

  setSearchValue(searchValue: string): void {
    this._stateService.setSearchValue(searchValue);
  }

  get userLogin(): UserModel['login'] {
    return this._loginService.user.login || DEFAULT_USER_LOGIN_TITLE;
  }
}
