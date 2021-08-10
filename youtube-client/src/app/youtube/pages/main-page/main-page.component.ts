import { Component } from '@angular/core';

import { StateService } from '@core/services/state/state.service';
import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import SortState from '@youtube/models/sort-state.model';

import { DEFAULT_SORT_STATE } from '@youtube/common/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent {
  constructor(
    private _stateService: StateService,
    private _youtubeService: YoutubeService,
  ) { }

  get searchResults(): SearchResultsItem[] {
    const currentSearchValue = this._stateService.getSearchValue();
    return this._youtubeService.getSearchResults(currentSearchValue);
  }

  get isSortingPanelOpen(): boolean {
    return this._stateService.getIsSortingPanelOpen();
  }

  get sortState(): SortState {
    return this._stateService.getSortState() || DEFAULT_SORT_STATE;
  }

  setSortState(newSortState: SortState): void {
    this._stateService.setSortState(newSortState);
  }

  get filteringValue(): string {
    return this._stateService.getFilteringValue();
  }

  setFilteringValue(filteringValue: string): void {
    this._stateService.setFilteringValue(filteringValue);
  }
}
