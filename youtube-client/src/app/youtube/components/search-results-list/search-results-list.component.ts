import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import SortState from '@youtube/models/sort-state.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsListComponent {
  @Input() searchResultsList: SearchResultsItem[] | null;
  @Input() sortState?: SortState;
  @Input() filteringValue?: string;

  constructor() {
    this.searchResultsList = null;
  }

  searchResultsItemById(index: number, item: SearchResultsItem): SearchResultsItem['id'] {
    return item.id;
  }
}
