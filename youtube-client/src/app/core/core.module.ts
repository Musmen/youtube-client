import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LogoComponent } from '@core/components/logo/logo.component';
import { SearchFormComponent } from '@core/components/search-form/search-form.component';
import { SettingsButtonComponent } from '@core/components/settings-button/settings-button.component';
import { LoginComponent } from '@core/components/login/login.component';
import { HeaderComponent } from '@app/core/pages/header/header.component';

@NgModule({
  declarations: [
    LogoComponent,
    SearchFormComponent,
    SettingsButtonComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
