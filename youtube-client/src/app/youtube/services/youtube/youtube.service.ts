import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { getParsedYoutubeResponse, getYouTubeResponseItemsIdsList } from '@youtube/common/tools';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import YoutubeResponse from '@app/youtube/models/youtube-response/youtube-response.model';

const YOUTUBE_API_TOKEN: string = 'AIzaSyAI-D1P0OH_z7m5_RzSiQgWz22lmXZ8ZAw';
const YOUTUBE_API_URL = {
  BASE: 'https://www.googleapis.com/youtube/v3/',
  SEARCH: `search?key=${YOUTUBE_API_TOKEN}&type=video&part=snippet&maxResults=15&q=`,
  VIDEOS: `videos?key=${YOUTUBE_API_TOKEN}&part=snippet,statistics&id=`,
};

@Injectable()
export class YoutubeService {
  _searchResults: SearchResultsItem[] = [];

  constructor(private _http: HttpClient) { }

  private _fetchSearchResultsVideo$(searchValue: string): Observable<YoutubeResponse> {
    const URL: string = `${YOUTUBE_API_URL.BASE}${YOUTUBE_API_URL.SEARCH}${searchValue}`;
    return this._http.get<YoutubeResponse>(URL);
  }

  private _fetchSearchResultsWithStats$(searchResultsIds: string): Observable<YoutubeResponse> {
    const URL: string = `${YOUTUBE_API_URL.BASE}${YOUTUBE_API_URL.VIDEOS}${searchResultsIds}`;
    return this._http.get<YoutubeResponse>(URL);
  }

  getSearchResults$(searchValue: string): Observable<SearchResultsItem[]> {
    return this._fetchSearchResultsVideo$(searchValue)
      .pipe(
        switchMap(
          (response: YoutubeResponse) => {
            const searchResultsIds: string = getYouTubeResponseItemsIdsList(response);
            return this._fetchSearchResultsWithStats$(searchResultsIds);
          },
        ),
        map(
          (response: YoutubeResponse) => {
            this._searchResults = getParsedYoutubeResponse(response);
            return this._searchResults;
          },
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
