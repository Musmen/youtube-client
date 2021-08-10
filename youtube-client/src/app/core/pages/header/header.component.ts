import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StateService } from '@core/services/state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private _stateService: StateService) { }

  toggleSortingPanel(): void {
    this._stateService.toggleSortingPanel();
  }

  get searchValue(): string {
    return this._stateService.getSearchValue();
  }

  setSearchValue(searchValue: string): void {
    this._stateService.setSearchValue(searchValue);
  }
}
