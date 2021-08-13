import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad } from '@angular/router';

import { LoginService } from '../services/login/login.service';

type BooleanExtended = Promise<boolean> | boolean;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(private _loginService: LoginService) { }

  private _checkAccess(): boolean {
    return this._loginService.checkIsUserLogged();
  }

  canActivate(): BooleanExtended {
    return this._checkAccess();
  }

  canDeactivate(): BooleanExtended {
    return this._checkAccess();
  }

  canLoad(): BooleanExtended {
    return this._checkAccess();
  }
}
