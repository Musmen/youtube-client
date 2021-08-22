import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';

import { LocationService } from '@core/services/location/location.service';
import { YoutubeService } from '@youtube/services/youtube/youtube.service';

import { getParsedYoutubeResponse } from '@youtube/common/tools';
import SearchResultsItem from '@youtube/models/search-results-item.model';
import YoutubeResponse from '@youtube/models/youtube-response/youtube-response.model';
import { EMPTY_SEARCH_RESULTS_ITEM } from '@app/youtube/common/constants';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent implements OnInit {
  infoCard$?: Observable<SearchResultsItem>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _youtubeService: YoutubeService,
    private _locationService: LocationService,
  ) { }

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;

    this.infoCard$ = this._youtubeService.fetchSearchResultsWithStats$(id)
      .pipe(
        map<YoutubeResponse, SearchResultsItem[]>(
          (response: YoutubeResponse) => getParsedYoutubeResponse(response),
        ),
        pluck(0),
        catchError(
          () => {
            this._locationService.goToMainPage();
            return of(EMPTY_SEARCH_RESULTS_ITEM);
          },
        ),
      );
  }
}
