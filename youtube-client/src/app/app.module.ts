import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { SearchFormComponent } from './header/search-form/search-form.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { SortingBlockComponent } from './sorting-block/sorting-block.component';
import { SearchResultsListComponent } from './search-results-block/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './search-results-block/search-results-item/search-results-item.component';
import { SearchResultsItemStatisticsComponent } from './search-results-block/search-results-item-statistics/search-results-item-statistics.component';
import { SortPipe } from './search-results-block/pipes/sort/sort.pipe';
import { FilterPipe } from './search-results-block/pipes/filter/filter.pipe';
import { BorderColorizerDirective } from './search-results-block/directives/border-colorizer/border-colorizer.directive';

const materialModules = [
  MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatExpansionModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    SearchFormComponent,
    SettingsButtonComponent,
    SortingBlockComponent,
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemStatisticsComponent,
    SortPipe,
    FilterPipe,
    BorderColorizerDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
