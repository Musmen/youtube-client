import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { generateAuthToken } from '@auth/common/helpers';
import UserModel from '@auth/models/user.model';
import { DEFAULT_USER, DEFAULT_USER_LOGIN_TITLE, STORAGE_KEYS } from '@auth/common/constants';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private _user!: UserModel;
  private _isLogged: boolean;

  constructor(private _router: Router) {
    this._isLogged = false;
    this._initUser();
  }

  private _initUser(): void {
    this._loadUser();
    if (this._user.token) this._isLogged = true;
  }

  private _loadUser(): void {
    this._user = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USER) || JSON.stringify(DEFAULT_USER),
    );
  }

  private _saveUser(user: UserModel): void {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(
      {
        login: user.login,
        token: user.token,
      },
    ));
  }

  private _setAuthToken(user: UserModel): void {
    this._user.token = generateAuthToken(user);
  }

  getUser(): UserModel {
    return this._user || DEFAULT_USER;
  }

  getUserLogin(): UserModel['login'] {
    return this._user.login || DEFAULT_USER_LOGIN_TITLE;
  }

  checkIsUserLogged(): boolean {
    return this._isLogged;
  }

  login(user: UserModel): void {
    this._user = { ...user };
    this._isLogged = true;
    this._setAuthToken(this._user);
    this._saveUser(this._user);
    this.goToMainPage();
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.USER);
    this._user = DEFAULT_USER;
    this._isLogged = false;
    this.goToLoginPage();
  }

  goToMainPage(): void {
    this._router.navigate(['main']);
  }

  goToLoginPage(): void {
    this._router.navigate(['login']);
  }
}
