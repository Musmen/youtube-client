import { NgModule } from '@angular/core';
import { AdminRoutingModule } from '@admin/admin-routing.module';

import { SharedModule } from '@shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
