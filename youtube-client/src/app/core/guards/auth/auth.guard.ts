import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad } from '@angular/router';

import { LocationService } from '@core/services/location/location.service';
import { StateService } from '@app/core/services/state/state.service';

type BooleanExtended = Promise<boolean> | boolean;

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {
  constructor(private _stateService: StateService, private _locationService: LocationService) { }

  private _checkAccess(): boolean {
    return this._stateService.checkIsUserLogged();
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
