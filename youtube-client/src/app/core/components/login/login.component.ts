import { Component, ChangeDetectionStrategy } from '@angular/core';

import UserModel from '@core/models/user.model';
import { DEFAULT_USER, MAX_USER_LOGIN_LENGTH } from '@core/common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  user: UserModel;
  MAX_USER_LOGIN_LENGTH: number;

  constructor() {
    this.user = DEFAULT_USER;
    this.MAX_USER_LOGIN_LENGTH = MAX_USER_LOGIN_LENGTH;
  }
}
