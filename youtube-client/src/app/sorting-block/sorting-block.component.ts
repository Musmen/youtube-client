import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DEFAULT_SORT_STATE } from '@common/constants';
import SortState from '@app/models/common/sort-state.model';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingBlockComponent {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() sortState: SortState;

  @Output() changeSortStateEvent = new EventEmitter<SortState>();
  @Output() changeFilteringInputEvent = new EventEmitter<string>();

  filteringInput?: string;

  constructor() {
    this.filteringInput = '';
    this.isSortingPanelOpen = false;
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
