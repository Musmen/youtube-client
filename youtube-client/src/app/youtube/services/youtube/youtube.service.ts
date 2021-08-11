import { Injectable } from '@angular/core';

import { getParsedYoutubeResponse } from '@youtube/common/tools';
import SearchResultsItem from '@youtube/models/search-results-item.model';
import mockYoutubeResponse from '@youtube/mock-youtube-response/mock-youtube-response';

@Injectable()
export class YoutubeService {
  _searchResults: SearchResultsItem[];

  constructor() {
    this._searchResults = getParsedYoutubeResponse(mockYoutubeResponse);
  }

  getSearchResults(searchValue: string): SearchResultsItem[] {
    if (!searchValue) return [];

    return this._searchResults;
  }

  getSearchResultsItemById(id: SearchResultsItem['id']): SearchResultsItem | undefined {
    return this._searchResults
      .find((searchResultItem: SearchResultsItem) => searchResultItem.id === id);
  }
}
