import { Component, OnInit } from '@angular/core';

import { parseYoutubeResponse } from '@app/common/tools';

import mockYoutubeResponse from '@app/mock-youtube-response/mock-youtube-response';
import SearchResultsItem from '../../models/search-results/search-results-item.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})

export class SearchResultsListComponent implements OnInit {
  searchResultsList?: SearchResultsItem[];

  ngOnInit() {
    this.searchResultsList = parseYoutubeResponse(mockYoutubeResponse);
  }
}
