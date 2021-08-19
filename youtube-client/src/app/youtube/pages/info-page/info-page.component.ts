import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { YoutubeService } from '@app/youtube/services/youtube/youtube.service';
import SearchResultsItem from '@youtube/models/search-results-item.model';
import YoutubeResponse from '@app/youtube/models/youtube-response/youtube-response.model';
import { getParsedYoutubeResponse } from '@app/youtube/common/tools';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent implements OnInit {
  infoCard$?: Observable<SearchResultsItem>;

  constructor(private _activatedRoute: ActivatedRoute, private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;

    this.infoCard$ = this._youtubeService.fetchSearchResultsWithStats$(id)
      .pipe(
        map<YoutubeResponse, SearchResultsItem[]>(
          (response: YoutubeResponse) => getParsedYoutubeResponse(response),
        ),
        pluck(0),
      );
  }
}
