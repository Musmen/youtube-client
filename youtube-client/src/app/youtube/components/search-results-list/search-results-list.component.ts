import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import SortState from '@youtube/models/sort-state.model';
import CustomCard from '@core/models/custom-card.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsListComponent {
  @Input() searchResultsList$: Observable<(SearchResultsItem | CustomCard)[] | null> = of([]);
  @Input() sortState?: SortState;
  @Input() filteringValue?: string;
}
