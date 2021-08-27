import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import CustomCard from '@core/models/custom-card.model';
import SearchResultsItem from '@youtube/models/search-results-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsItemComponent {
  @Input() searchResultsItem?: SearchResultsItem | CustomCard;
}
