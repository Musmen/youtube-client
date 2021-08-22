import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { getParsedYoutubeResponse, getYouTubeResponseItemsIdsList } from '@youtube/common/tools';
import SearchResultsItem from '@youtube/models/search-results-item.model';
import YoutubeResponse from '@youtube/models/youtube-response/youtube-response.model';
import { YOUTUBE_API_URL } from '@youtube/common/constants';

@Injectable()
export class YoutubeService {
  _searchResults: SearchResultsItem[] = [];

  constructor(private _http: HttpClient) { }

  private _fetchSearchResultsVideo$(searchValue: string): Observable<YoutubeResponse> {
    const API_URL_FOR_VIDEOS: string = `${YOUTUBE_API_URL.SEARCH}${searchValue}`;
    return this._http.get<YoutubeResponse>(API_URL_FOR_VIDEOS);
  }

  fetchSearchResultsWithStats$(searchResultsIds: string): Observable<YoutubeResponse> {
    const API_URL_FOR_STATS: string = `${YOUTUBE_API_URL.VIDEOS}${searchResultsIds}`;
    return this._http.get<YoutubeResponse>(API_URL_FOR_STATS);
  }

  getSearchResults$(searchValue: string): Observable<SearchResultsItem[]> {
    return this._fetchSearchResultsVideo$(searchValue)
      .pipe(
        switchMap(
          (response: YoutubeResponse) => {
            const searchResultsIds: string = getYouTubeResponseItemsIdsList(response);
            return this.fetchSearchResultsWithStats$(searchResultsIds);
          },
        ),
        map(
          (response: YoutubeResponse) => {
            this._searchResults = getParsedYoutubeResponse(response);
            return this._searchResults;
          },
        ),
        catchError(
          () => of(this._searchResults),
        ),
      );
  }

  getSearchResults(): SearchResultsItem[] {
    return this._searchResults;
  }

  getSearchResultsItemById(idToFind: SearchResultsItem['id']): SearchResultsItem | undefined {
    return this._searchResults
      .find(({ id }) => id === idToFind);
  }
}
