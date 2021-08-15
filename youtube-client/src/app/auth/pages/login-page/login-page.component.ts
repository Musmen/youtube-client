import { Component } from '@angular/core';

import { LoginService } from '@auth/services/login/login.service';
import UserModel from '@auth/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  user: UserModel;

  constructor(private _loginService: LoginService) {
    this.user = { ..._loginService.getUser() };
  }

  login(user: UserModel): void {
    this._loginService.login(user);
  }

  logout(): void {
    this._loginService.logout();
  }

  checkIsUserLogged(): boolean {
    return this._loginService.checkIsUserLogged();
  }
}
