import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@core/pages/not-found/not-found.component';
import { AuthGuard } from '@auth/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'auth', redirectTo: 'login' },
  { path: 'home', redirectTo: 'main' },
  {
    path: 'login',
    loadChildren: () => import('@auth/auth.module')
      .then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('@youtube/youtube.module')
      .then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
