import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '@core/services/login/login.service';
import UserModel from '@core/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  user: UserModel;

  constructor(private _loginService: LoginService) {
    this.user = this._loginService.getUser();
  }

  login(user: UserModel): void {
    this._loginService.login(user);
  }

  logout(): void {
    this._loginService.logout();
  }

  getIsUserLogged$(): Observable<boolean> {
    return this._loginService.getIsUserLogged$();
  }
}
