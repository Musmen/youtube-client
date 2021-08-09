import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import SearchResultsItem from '../../models/search-results/search-results-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsItemComponent {
  @Input() searchResultsItem?: SearchResultsItem;
}
