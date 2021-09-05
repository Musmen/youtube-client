import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import {
  catchError,
  first,
  map,
  mergeMap,
  pluck,
} from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { selectAllCards } from '@redux/selectors/app.selectors';
import { AppState } from '@redux/state.model';

import { LocationService } from '@core/services/location/location.service';
import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import { getParsedYoutubeResponse } from '@app/youtube/common/tools';
import SearchResultsItem from '@core/models/cards/search-results-item.model';
import YoutubeResponse from '@youtube/models/youtube-response/youtube-response.model';
import CustomCard from '@core/models/cards/custom-card.model';
import { EMPTY_SEARCH_RESULTS_ITEM } from '@youtube/common/constants';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent implements OnInit {
  infoCard$?: Observable<SearchResultsItem | CustomCard>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _locationService: LocationService,
    private _store: Store<AppState>,
    private _youtubeService: YoutubeService,
  ) { }

  private _getInfoCard$FromStorage(
    idToFind: string,
  ): Observable<SearchResultsItem | CustomCard> {
    return this._store.select(selectAllCards)
      .pipe(
        mergeMap((cards) => cards),
        first(({ id }) => id === idToFind),
        catchError(this._errorHandler),
      );
  }

  private _getInfoCard$FromYoutubeApi(
    idToFind: string,
  ): Observable<SearchResultsItem | CustomCard> {
    return this._youtubeService.fetchSearchResultsWithStats$(idToFind)
      .pipe(
        map<YoutubeResponse, SearchResultsItem[]>(
          (response: YoutubeResponse) => getParsedYoutubeResponse(response),
        ),
        pluck(0),
        catchError(this._errorHandler),
      );
  }

  private _errorHandler(): Observable<SearchResultsItem | CustomCard> {
    this._locationService.goToMainPage();
    return of(EMPTY_SEARCH_RESULTS_ITEM);
  }

  ngOnInit(): void {
    const idToFind = this._activatedRoute.snapshot.params.id;
    const isCardCustom = this._activatedRoute.snapshot.queryParams.isCustom;

    this.infoCard$ = isCardCustom
      ? this._getInfoCard$FromStorage(idToFind)
      : this._getInfoCard$FromYoutubeApi(idToFind);
  }
}
