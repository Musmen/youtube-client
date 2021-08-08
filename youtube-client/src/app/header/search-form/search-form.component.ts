import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent {
  @Output() private requestSearchResultsEvent = new EventEmitter<string>();

  searchValue?: string;

  requestSearchResults(): void {
    this.requestSearchResultsEvent.emit();
  }
}
