import { Component } from '@angular/core';
import SearchResultItem from '../../models/youtube-response/youtube-response-item.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})

export class SearchResultsListComponent {
  searchResultsList?: SearchResultItem[];
}
