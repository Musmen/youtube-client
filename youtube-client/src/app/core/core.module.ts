import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LogoComponent } from '@core/components/logo/logo.component';
import { SearchFormComponent } from '@core/components/search-form/search-form.component';
import { SettingsButtonComponent } from '@core/components/settings-button/settings-button.component';
import { LoginComponent } from '@core/components/login/login.component';
import { HeaderComponent } from '@core/pages/header/header.component';
import { NotFoundComponent } from '@core/pages/not-found/not-found.component';
import { SpinnerComponent } from '@core/components/spinner/spinner.component';

@NgModule({
  declarations: [
    LogoComponent,
    SearchFormComponent,
    SettingsButtonComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    SpinnerComponent,
  ],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    SpinnerComponent,
  ],
})
export class CoreModule { }
