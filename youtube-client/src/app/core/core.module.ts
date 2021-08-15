import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LogoComponent } from '@core/components/logo/logo.component';
import { SearchFormComponent } from '@core/components/search-form/search-form.component';
import { SettingsButtonComponent } from '@core/components/settings-button/settings-button.component';
import { LoginComponent } from '@core/components/login/login.component';
import { HeaderComponent } from '@core/pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    LogoComponent,
    SearchFormComponent,
    SettingsButtonComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule { }
