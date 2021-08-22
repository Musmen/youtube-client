import { Injectable } from '@angular/core';

import UserModel from '@core/models/user.model';
import { DEFAULT_USER, STORAGE_KEYS } from '@core/common/constants';

import { RefService } from '../ref/ref.service';

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  private _localStorage: Storage;

  constructor(private _refService: RefService) {
    this._localStorage = this._refService.localStorage;
  }

  getUserStorage(): UserModel {
    return JSON.parse(
      this._localStorage.getItem(STORAGE_KEYS.USER) || JSON.stringify(DEFAULT_USER),
    );
  }

  setUserStorage(user: UserModel): void {
    this._localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(
      {
        login: user.login,
        token: user.token,
      },
    ));
  }

  clearUserStorage(): void {
    this._localStorage.removeItem(STORAGE_KEYS.USER);
  }
}
