import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchFormComponent {
  @Output() private setSearchValueEvent = new EventEmitter<string>();
  searchValue: string = '';

  setSearchValue(searchValue: string = this.searchValue): void {
    this.setSearchValueEvent.emit(searchValue);
  }
}
