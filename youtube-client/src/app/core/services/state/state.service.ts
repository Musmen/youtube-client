import { Injectable } from '@angular/core';

import SortState from '@youtube/models/sort-state.model';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _searchValue: string;
  private _isSortingPanelOpen: boolean;
  private _sortState?: SortState;
  private _filteringValue: string;

  constructor() {
    this._searchValue = '';
    this._isSortingPanelOpen = false;
    this._filteringValue = '';
  }

  toggleSortingPanel(): void {
    this._isSortingPanelOpen = !this._isSortingPanelOpen;
  }

  getIsSortingPanelOpen(): boolean {
    return this._isSortingPanelOpen;
  }

  setSortState(newSortState: SortState): void {
    this._sortState = { ...newSortState };
  }

  getSortState(): SortState | undefined {
    return this._sortState;
  }

  setFilteringValue(filteringValue: string): void {
    this._filteringValue = filteringValue;
  }

  getFilteringValue(): string {
    return this._filteringValue;
  }

  setSearchValue(searchValue: string): void {
    this._searchValue = searchValue;
  }

  getSearchValue(): string {
    return this._searchValue;
  }
}
