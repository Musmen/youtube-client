import { Component } from '@angular/core';

import { getParsedYoutubeResponse } from '@app/common/tools';
import { DEFAULT_SORTING_STATE } from '@app/common/constants';
import mockYoutubeResponse from '@app/mock-youtube-response/mock-youtube-response';

import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import SortingState from '@app/models/common/sorting-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isSortingPanelOpen: boolean ;
  searchResultsList: SearchResultsItem[];
  sortingState: SortingState = DEFAULT_SORTING_STATE;
  filteringValue: string;

  constructor() {
    this.isSortingPanelOpen = false;
    this.searchResultsList = [];
    this.sortingState = DEFAULT_SORTING_STATE;
    this.filteringValue = '';
  }

  toggleSortingPanel(): void {
    this.isSortingPanelOpen = !this.isSortingPanelOpen;
  }

  requestSearchResults(): void {
    this.searchResultsList = getParsedYoutubeResponse(mockYoutubeResponse);
  }

  changeSortingState(newSortingState: SortingState): void {
    this.sortingState = { ...newSortingState };
  }

  changeFilteringInput(filteringValue: string): void {
    this.filteringValue = filteringValue;
  }
}
