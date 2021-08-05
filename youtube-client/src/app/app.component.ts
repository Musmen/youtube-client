import { Component } from '@angular/core';

import { parseYoutubeResponse } from '@app/common/tools';
import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import mockYoutubeResponse from '@app/mock-youtube-response/mock-youtube-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isSortingPanelOpen: boolean = false;
  searchResultsList?: SearchResultsItem[];

  toggleSortingPanel(): void {
    this.isSortingPanelOpen = !this.isSortingPanelOpen;
  }

  requestSearchResults(searchValue: string): void {
    this.searchResultsList = (searchValue)
      ? parseYoutubeResponse(mockYoutubeResponse)
      : [];
  }
}
