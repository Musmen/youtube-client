import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { generateAuthToken } from '@auth/common/helpers';
import UserModel from '@auth/models/user.model';
import { DEFAULT_USER, STORAGE_KEYS } from '@auth/common/constants';

@Injectable({ providedIn: 'root' })
export class LoginService {
  user: UserModel;
  isLogged?: boolean;

  constructor(private _router: Router) {
    this.user = DEFAULT_USER;
    this.checkLoggedUser();
  }

  checkAuthToken(): void {
    this.isLogged = Boolean(localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN));
  }

  saveAuthToken(user: UserModel): void {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, generateAuthToken(user));
  }

  checkLoggedUser(): void {
    this.checkAuthToken();
    if (!this.isLogged) return;

    this.loadUser();
  }

  saveUser(user: UserModel): void {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  loadUser(): void {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || '');
  }

  goToMain(): void {
    this._router.navigate(['main']);
  }

  login(user: UserModel): void {
    this.user = { ...user };
    this.isLogged = true;
    this.saveAuthToken(user);
    this.saveUser(user);
    this.goToMain();
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    this.isLogged = false;
  }
}
