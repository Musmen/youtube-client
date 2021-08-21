import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { generateAuthToken } from '@core/common/helpers';
import UserModel from '@core/models/user.model';
import { DEFAULT_USER, DEFAULT_USER_LOGIN_TITLE } from '@core/common/constants';

import { LocationService } from '@core/services/location/location.service';
import { UserStorageService } from '@core/services/user-storage/user-storage.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private _user: UserModel = { ...DEFAULT_USER };
  private _isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private _locationService: LocationService,
    private _userStorageService: UserStorageService,
  ) {
    this._initUser();
  }

  private _initUser(): void {
    const user: UserModel = this.getUserStorage();
    this.setUser(user);
    this.updateUserLoginStatus();
  }

  private _setAuthToken(user: UserModel = this._user): void {
    this._user.token = generateAuthToken(user);
  }

  checkIsUserLogged(): boolean {
    return this._isUserLogged$.getValue();
  }
  getIsUserLogged$(): Observable<boolean> {
    return this._isUserLogged$.asObservable();
  }

  setUser(user: UserModel): void {
    this._user = { ...user };
  }
  getUser(): UserModel {
    return this._user;
  }
  getUserLogin(): UserModel['login'] {
    return this.getUser().login || DEFAULT_USER_LOGIN_TITLE;
  }
  checkIsUserToken(): boolean {
    return Boolean(this._user.token);
  }

  setUserStorage(user: UserModel): void {
    this._userStorageService.setUserStorage(user);
  }
  getUserStorage(): UserModel {
    return this._userStorageService.getUserStorage();
  }
  clearUserStorage(): void {
    this._userStorageService.clearUserStorage();
  }

  setLoginStatus(): void {
    this._isUserLogged$.next(true);
  }
  setLogoutStatus(): void {
    this._isUserLogged$.next(false);
  }
  updateUserLoginStatus(): void {
    if (this.checkIsUserToken()) this.setLoginStatus();
  }

  login(user: UserModel = this._user): void {
    this._setAuthToken();
    this.setUser(user);
    this.setUserStorage(user);
    this.setLoginStatus();
    this._locationService.goToMainPage();
  }
  logout(): void {
    this.clearUserStorage();
    this.setUser({ ...DEFAULT_USER });
    this.setLogoutStatus();
    this._locationService.goToLoginPage();
  }
}
