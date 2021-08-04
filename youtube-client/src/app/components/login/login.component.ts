import { Component } from '@angular/core';

import UserModel from '@app/models/user/user.model';
import { DEFAULT_USER } from '@common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  user: UserModel = DEFAULT_USER;
}
