import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { URL_MODIFIER_INTERCEPTOR_PROVIDE_TOKEN } from './youtube/interceptors/url-modifier.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    URL_MODIFIER_INTERCEPTOR_PROVIDE_TOKEN,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
