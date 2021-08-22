import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SortingBlockComponent } from '@youtube/components/sorting-block/sorting-block.component';
import { SearchResultsListComponent } from '@youtube/components/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from '@youtube/components/search-results-item/search-results-item.component';
import { ItemStatisticsComponent } from '@app/youtube/components/item-statistics/item-statistics.component';

import { ColorizerDirective } from '@youtube/directives/colorizer/colorizer.directive';

import { FilterPipe } from '@youtube/pipes/filter/filter.pipe';
import { SortPipe } from '@youtube/pipes/sort/sort.pipe';

import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { InfoPageComponent } from './pages/info-page/info-page.component';

@NgModule({
  declarations: [
    SortingBlockComponent,
    SearchResultsListComponent,
    SearchResultsItemComponent,
    ItemStatisticsComponent,
    ColorizerDirective,
    FilterPipe,
    SortPipe,
    MainPageComponent,
    InfoPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    SharedModule,
  ],
  providers: [YoutubeService],
})
export class YoutubeModule { }
