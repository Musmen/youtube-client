import { Component } from '@angular/core';
import SearchResultsItem from '../../models/search-results/search-results-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})

export class SearchResultsItemComponent {
  searchResultItem?: SearchResultsItem;
}
