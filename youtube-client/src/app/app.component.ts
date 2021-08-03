import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isSortingPanelOpen: boolean = false;

  toggleSortingPanel() {
    this.isSortingPanelOpen = !this.isSortingPanelOpen;
  }
}
