import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() private toggleSortingPanelEvent = new EventEmitter<void>();
  @Output() private requestSearchResultsEvent = new EventEmitter<string>();

  toggleSortingPanel(): void {
    this.toggleSortingPanelEvent.emit();
  }

  requestSearchResults(searchValue: string): void {
    this.requestSearchResultsEvent.emit(searchValue);
  }
}
