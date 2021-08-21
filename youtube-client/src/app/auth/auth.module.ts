import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from '@auth/auth-routing.module';

import { LoginPageComponent } from '@auth/pages/login-page/login-page.component';
import { LoginService } from '@auth/services/login/login.service';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [LoginService],
})

export class AuthModule { }
