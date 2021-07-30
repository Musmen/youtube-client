import { Component } from '@angular/core';
import SearchResultsItem from '../../models/search-results/search-results-item.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})

export class SearchResultsListComponent {
  searchResultsList?: SearchResultsItem[];
}
