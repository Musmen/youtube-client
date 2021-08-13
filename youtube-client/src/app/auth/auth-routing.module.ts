import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '@auth/pages/login-page/login-page.component';
import { AuthGuard } from '@auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canDeactivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
