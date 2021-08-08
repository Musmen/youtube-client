import { Component, Input } from '@angular/core';

import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import SortState from '@app/models/common/sort-state.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})

export class SearchResultsListComponent {
  @Input() searchResultsList?: SearchResultsItem[];
  @Input() sortState?: SortState;
  @Input() filteringValue?: string;
}
