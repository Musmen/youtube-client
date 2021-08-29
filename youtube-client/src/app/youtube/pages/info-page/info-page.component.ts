import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, first, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { selectAllCards } from '@redux/selectors/app.selectors';
import { AppState } from '@redux/state.model';

import { LocationService } from '@core/services/location/location.service';

import SearchResultsItem from '@core/models/cards/search-results-item.model';
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
  ) { }

  ngOnInit(): void {
    const idToFind = this._activatedRoute.snapshot.params.id;

    this.infoCard$ = this._store.select(selectAllCards)
      .pipe(
        mergeMap((cards) => cards),
        first(({ id }) => id === idToFind),
        catchError(
          () => {
            this._locationService.goToMainPage();
            return of(EMPTY_SEARCH_RESULTS_ITEM);
          },
        ),
      );
  }
}
