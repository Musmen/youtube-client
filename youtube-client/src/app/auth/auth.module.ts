import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from '@auth/auth-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
})

export class AuthModule { }
