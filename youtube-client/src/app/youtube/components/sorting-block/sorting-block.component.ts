import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DEFAULT_SORT_STATE } from '@youtube/common/constants';
import SortState from '@youtube/models/sort-state.model';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingBlockComponent {
  @Input() isSortingPanelOpen?: boolean;
  @Input() sortState: SortState;

  @Output() changeSortStateEvent = new EventEmitter<SortState>();
  @Output() changeFilteringInputEvent = new EventEmitter<string>();

  filteringInput?: string;

  constructor() {
    this.filteringInput = '';
    this.sortState = DEFAULT_SORT_STATE;
  }

  changeSortState(newSortingBy: string): void {
    if (this.sortState.sortingBy === newSortingBy) {
      this.sortState.isIncreasing = !this.sortState.isIncreasing;
    } else {
      this.sortState.sortingBy = newSortingBy;
    }
    this.changeSortStateEvent.emit(this.sortState);
  }

  changeFilteringInput(): void {
    this.changeFilteringInputEvent.emit(this.filteringInput);
  }
}
