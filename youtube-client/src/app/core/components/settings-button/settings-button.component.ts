import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsButtonComponent {
  @Output() toggleSortingPanelEvent = new EventEmitter<void>();

  toggleSortingPanel() {
    this.toggleSortingPanelEvent.emit();
  }
}
