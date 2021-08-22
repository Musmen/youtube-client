import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from '@core/services/state/state.service';
import { LoginService } from '@core/services/login/login.service';
import { LocationService } from '@core//services/location/location.service';
import UserModel from '@core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private _stateService: StateService,
    private _loginService: LoginService,
    private _locationService: LocationService,
  ) { }

  get userLogin(): UserModel['login'] {
    return this._loginService.getUserLogin();
  }

  getIsUserLogged$(): Observable<boolean> {
    return this._loginService.getIsUserLogged$();
  }

  setSearchValue(searchValue: string): void {
    this._stateService.setSearchValue(searchValue);
  }

  toggleSortingPanel(): void {
    this._stateService.toggleSortingPanel();
  }

  goToLoginPage(): void {
    this._locationService.goToLoginPage();
  }

  logout(): void {
    this._loginService.logout();
  }
}
