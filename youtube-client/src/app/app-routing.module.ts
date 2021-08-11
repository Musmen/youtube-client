import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@youtube/youtube.module')
      .then((module) => module.YoutubeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.module')
      .then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
