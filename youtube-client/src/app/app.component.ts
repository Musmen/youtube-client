import { Component, ChangeDetectionStrategy } from '@angular/core';

// import { getParsedYoutubeResponse } from '@app/common/tools';
// import { DEFAULT_SORT_STATE } from '@app/common/constants';
// import mockYoutubeResponse from '@app/youtube/mock-youtube-response/mock-youtube-response';

// import SearchResultsItem from '@app/models/search-results/search-results-item.model';
// import SortState from '@app/models/common/sort-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  // isSortingPanelOpen: boolean ;
  // searchResultsList: SearchResultsItem[];
  // sortState: SortState = DEFAULT_SORT_STATE;
  // filteringValue: string;

  // constructor() {
  //   this.isSortingPanelOpen = false;
  //   this.searchResultsList = [];
  //   this.sortState = DEFAULT_SORT_STATE;
  //   this.filteringValue = '';
  // }

  // toggleSortingPanel(): void {
  //   this.isSortingPanelOpen = !this.isSortingPanelOpen;
  // }

  // requestSearchResults(): void {
  //   this.searchResultsList = getParsedYoutubeResponse(mockYoutubeResponse);
  // }

  // changeSortState(newSortState: SortState): void {
  //   this.sortState = { ...newSortState };
  // }

  // changeFilteringInput(filteringValue: string): void {
  //   this.filteringValue = filteringValue;
  // }
}
