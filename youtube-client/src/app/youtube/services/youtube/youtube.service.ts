import { Injectable } from '@angular/core';

import { getParsedYoutubeResponse } from '@app/common/tools';
import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import mockYoutubeResponse from '@app/youtube/mock-youtube-response/mock-youtube-response';

@Injectable()
export class YoutubeService {
  getSearchResults(searchValue: string): SearchResultsItem[] {
    if (!searchValue) return [];

    return getParsedYoutubeResponse(mockYoutubeResponse);
  }
}
