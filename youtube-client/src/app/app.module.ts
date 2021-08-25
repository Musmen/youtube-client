import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';

import {
  URL_MODIFIER_INTERCEPTOR_PROVIDE_TOKEN,
} from '@youtube/interceptors/url-modifier/url-modifier.interceptor';
import {
  SPINNER_CONTROLLER_INTERCEPTOR_PROVIDE_TOKEN,
} from '@core/interceptors/spinner-controller/spinner-controller.interceptor';
import {
  ERROR_HANDLER_INTERCEPTOR_PROVIDE_TOKEN,
} from '@core/interceptors/error-handler/error-handler.interceptor';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(
      {
        customCards: customCardsReducer,
        youtubeVideos: youtubeVideosReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    SPINNER_CONTROLLER_INTERCEPTOR_PROVIDE_TOKEN,
    URL_MODIFIER_INTERCEPTOR_PROVIDE_TOKEN,
    ERROR_HANDLER_INTERCEPTOR_PROVIDE_TOKEN,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
