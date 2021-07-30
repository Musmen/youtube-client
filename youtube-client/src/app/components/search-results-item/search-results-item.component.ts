import { Component } from '@angular/core';
import SearchResultItem from '../../models/youtube-response/youtube-response-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})

export class SearchResultsItemComponent {
  searchResultItem?: SearchResultItem;
}
