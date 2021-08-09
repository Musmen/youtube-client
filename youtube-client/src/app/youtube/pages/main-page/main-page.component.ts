import { Component } from '@angular/core';

import { DEFAULT_SORT_STATE } from '@app/common/constants';

import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import SortState from '@app/models/common/sort-state.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent {
  isSortingPanelOpen: boolean ;
  searchResultsList: SearchResultsItem[];
  sortState: SortState = DEFAULT_SORT_STATE;
  filteringValue: string;

  constructor() {
    this.isSortingPanelOpen = false;
    this.searchResultsList = [];
    this.sortState = DEFAULT_SORT_STATE;
    this.filteringValue = '';
  }

  changeSortState(newSortState: SortState): void {
    this.sortState = { ...newSortState };
  }

  changeFilteringInput(filteringValue: string): void {
    this.filteringValue = filteringValue;
  }
}
