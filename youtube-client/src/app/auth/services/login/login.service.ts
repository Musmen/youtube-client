import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from '@core/services/state/state.service';

import { generateAuthToken } from '@auth/common/helpers';
import UserModel from '@core/models/user.model';
import { DEFAULT_USER } from '@core/common/constants';

@Injectable()
export class LoginService {
  private _user!: UserModel;

  constructor(private _stateService: StateService) {
    this._user = this._stateService.getUser();
  }

  private _setAuthToken(user: UserModel = this._user): void {
    this._user.token = generateAuthToken(user);
  }

  private _setUser(user: UserModel) {
    this._user = user;
  }

  getUser(): UserModel {
    return this._user;
  }

  getIsUserLogged$(): Observable<boolean> {
    return this._stateService.getIsUserLogged$();
  }

  login(user: UserModel = this._user): void {
    this._setAuthToken();
    this._setUser(user);
    this._stateService.login(user);
  }

  logout(): void {
    this._setUser(DEFAULT_USER);
    this._stateService.logout();
  }
}
