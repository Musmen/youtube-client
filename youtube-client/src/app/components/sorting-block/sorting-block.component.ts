import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { DEFAULT_SORTING_STATE } from '@common/constants';
import SortingState from '@app/models/common/sorting-state.model';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
})
export class SortingBlockComponent {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() sortingState: SortingState;
  @Output() changeSortingStateEvent = new EventEmitter<SortingState>();

  filteringInput?: string;

  constructor() {
    this.filteringInput = '';
    this.isSortingPanelOpen = false;
    this.sortingState = DEFAULT_SORTING_STATE;
  }

  changeSortingState(newSortingBy: string): void {
    if (this.sortingState.sortingBy === newSortingBy) {
      this.sortingState.isIncreasing = !this.sortingState.isIncreasing;
    } else {
      this.sortingState.sortingBy = newSortingBy;
    }
    this.changeSortingStateEvent.emit(this.sortingState);
  }
}
