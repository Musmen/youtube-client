import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import CustomCard from '@core/models/cards/custom-card.model';
import SearchResultsItem from '@core/models/cards/search-results-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsItemComponent {
  @Input() searchResultsItem?: SearchResultsItem | CustomCard;

  constructor(private _router: Router) { }

  goToInfoPage() {
    this._router.navigate(
      ['/main', this.searchResultsItem?.id],
      {
        queryParams: { isCustom: this.searchResultsItem?.isCustom },
      },
    );
  }
}
