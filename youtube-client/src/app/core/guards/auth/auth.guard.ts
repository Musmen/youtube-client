import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad } from '@angular/router';

import { LocationService } from '@core/services/location/location.service';
import { LoginService } from '@core/services/login/login.service';

type BooleanExtended = Promise<boolean> | boolean;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(private _loginService: LoginService, private _locationService: LocationService) { }

  private _checkAccess(): boolean {
    return this._loginService.checkIsUserLogged();
  }

  canActivate(): BooleanExtended {
    if (!this._checkAccess()) {
      this._locationService.goToLoginPage();
      return false;
    }
    return true;
  }

  canDeactivate(): BooleanExtended {
    return this._checkAccess();
  }

  canLoad(): BooleanExtended {
    return this.canActivate();
  }
}
