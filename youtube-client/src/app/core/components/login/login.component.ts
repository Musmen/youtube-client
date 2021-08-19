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

  @Output() goToLoginPageEvent = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();

  MAX_USER_LOGIN_LENGTH: number = MAX_USER_LOGIN_LENGTH;

  goToLogin(): void {
    this.goToLoginPageEvent.emit();
  }

  logout(): void {
    this.logoutEvent.emit();
  }
}
