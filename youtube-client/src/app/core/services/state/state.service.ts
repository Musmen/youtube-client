import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import SortState from '@youtube/models/sort-state.model';
import { DEBOUNCE_TIME_IN_MS, MIN_SEARCH_VALUE_LENGTH } from '@core/common/constants';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _searchValue$: Subject<string> = new Subject<string>();
  private _isSortingPanelOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _sortState?: SortState;
  private _filteringValue: string = '';

  toggleSortingPanel(): void {
    this._isSortingPanelOpen$.next(!this.getIsSortingPanelOpen());
  }
  getIsSortingPanelOpen(): boolean {
    return this._isSortingPanelOpen$.getValue();
  }
  getIsSortingPanelOpen$(): Observable<boolean> {
    return this._isSortingPanelOpen$.asObservable();
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
    this._searchValue$.next(searchValue);
  }
  getSearchValue$(): Observable<string> {
    return this._searchValue$.asObservable()
      .pipe(
        debounceTime(DEBOUNCE_TIME_IN_MS),
        distinctUntilChanged(),
        filter(
          (searchValue: string) => Boolean(
            searchValue.length >= MIN_SEARCH_VALUE_LENGTH,
          ),
        ),
      );
  }
}
