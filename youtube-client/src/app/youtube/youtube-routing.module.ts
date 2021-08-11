import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'info/:id', component: InfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }
