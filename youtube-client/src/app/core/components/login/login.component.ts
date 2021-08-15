import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import UserModel from '@app/auth/models/user.model';
import { MAX_USER_LOGIN_LENGTH } from '@core/common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  @Input() userLogin?: UserModel['login'];
  @Input() isUserLogged?: boolean;

  @Output() loginEvent = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();

  MAX_USER_LOGIN_LENGTH: number;

  constructor() {
    this.MAX_USER_LOGIN_LENGTH = MAX_USER_LOGIN_LENGTH;
  }

  login(): void {
    this.loginEvent.emit();
  }

  logout(): void {
    this.logoutEvent.emit();
  }
}
