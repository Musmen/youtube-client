import { Component, Input } from '@angular/core';

import { LabelsIcons } from '@common/constants';

@Component({
  selector: 'app-search-results-item-statistics',
  templateUrl: './search-results-item-statistics.component.html',
  styleUrls: ['./search-results-item-statistics.component.scss'],
})

export class SearchResultsItemStatisticsComponent {
  @Input() statistics?: { [key: string]: string };

  labelsIcons = LabelsIcons;
  statisticLabels: string[];

  constructor() {
    this.statisticLabels = Object.keys(LabelsIcons);
  }
}
