import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SortingBlockComponent } from '@youtube/components/sorting-block/sorting-block.component';
import { SearchResultsListComponent } from '@youtube/components/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from '@youtube/components/search-results-item/search-results-item.component';
import { SearchResultsItemStatisticsComponent } from '@youtube/components/search-results-item-statistics/search-results-item-statistics.component';

import { BorderColorizerDirective } from '@youtube/directives/border-colorizer/border-colorizer.directive';

import { FilterPipe } from '@youtube/pipes/filter/filter.pipe';
import { SortPipe } from '@youtube/pipes/sort/sort.pipe';

import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SortingBlockComponent,
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemStatisticsComponent,
    BorderColorizerDirective,
    FilterPipe,
    SortPipe,
    MainPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [YoutubeService],
})
export class YoutubeModule { }
