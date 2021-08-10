import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { LabelsIcons } from '@youtube/common/constants';

@Component({
  selector: 'app-search-results-item-statistics',
  templateUrl: './search-results-item-statistics.component.html',
  styleUrls: ['./search-results-item-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchResultsItemStatisticsComponent {
  @Input() statistics?: { [key: string]: string };

  labelsIcons = LabelsIcons;
  statisticLabels: string[];

  constructor() {
    this.statisticLabels = Object.keys(LabelsIcons);
  }
}
