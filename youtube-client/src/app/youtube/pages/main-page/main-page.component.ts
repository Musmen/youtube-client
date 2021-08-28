import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '@app/redux/state.model';
import { updateSearchResultsSuccessfully } from '@redux/actions/youtubeVideos.actions';
import { selectAllCards } from '@redux/selectors/app.selectors';

import { StateService } from '@core/services/state/state.service';
import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import SortState from '@youtube/models/sort-state.model';
import CustomCard from '@core/models/custom-card.model';

import { DEFAULT_SORT_STATE } from '@youtube/common/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription = new Subscription();

  searchResults$: Observable<(SearchResultsItem | CustomCard)[]> = this._store
    .select(selectAllCards);

  constructor(
    private _stateService: StateService,
    private _youtubeService: YoutubeService,
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    const subscription: Subscription = this._getSearchValue$()
      .pipe(
        switchMap<string, Observable<SearchResultsItem[]>>(
          (newSearchValue: string) => this._getSearchResults$(newSearchValue),
        ),
      )
      .subscribe(
        (newSearchResults: SearchResultsItem[]) => {
          this._store.dispatch(
            updateSearchResultsSuccessfully({ searchResults: newSearchResults }),
          );
        },
      );
    this._subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _getSearchValue$(): Observable<string> {
    return this._stateService.getSearchValue$();
  }

  private _getSearchResults$(searchValue: string): Observable<SearchResultsItem[]> {
    return this._youtubeService.getSearchResults$(searchValue);
  }

  getIsSortingPanelOpen$(): Observable<boolean> {
    return this._stateService.getIsSortingPanelOpen$();
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
