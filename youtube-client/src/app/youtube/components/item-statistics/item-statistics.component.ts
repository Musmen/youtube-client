import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { LabelsIcons } from '@youtube/common/constants';

@Component({
  selector: 'app-item-statistics',
  templateUrl: './item-statistics.component.html',
  styleUrls: ['./item-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ItemStatisticsComponent {
  @Input() statistics?: { [key: string]: string };

  labelsIcons = LabelsIcons;
  statisticLabels: string[] = Object.keys(LabelsIcons);
}
