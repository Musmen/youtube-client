import {
  Component,
  EventEmitter,
  Input,
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
  @Input() searchValue?: string;
  @Output() private setSearchValueEvent = new EventEmitter<string>();

  setSearchValue(): void {
    this.setSearchValueEvent.emit(this.searchValue);
  }
}
