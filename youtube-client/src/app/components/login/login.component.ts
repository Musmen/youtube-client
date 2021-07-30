import { Component } from '@angular/core';
import UserModel from '../../models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user?: UserModel;
}
