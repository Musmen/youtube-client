import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LOGO_TITLE } from '@core/common/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LogoComponent {
  logoTitle: string;

  constructor() {
    this.logoTitle = LOGO_TITLE;
  }
}
