import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
})
export class SortingBlockComponent {
  @Input() isSortingPanelOpen: boolean = false;

  filteringInput?: string;
}
