import { Injectable } from '@angular/core';

import { getParsedYoutubeResponse } from '@youtube/common/tools';
import SearchResultsItem from '@youtube/models/search-results-item.model';
import mockYoutubeResponse from '@youtube/mock-youtube-response/mock-youtube-response';

@Injectable()
export class YoutubeService {
  getSearchResults(searchValue: string): SearchResultsItem[] {
    if (!searchValue) return [];

    return getParsedYoutubeResponse(mockYoutubeResponse);
  }
}
