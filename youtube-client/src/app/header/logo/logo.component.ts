import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LOGO_TITLE } from '@common/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LogoComponent {
  logoTitle: string = LOGO_TITLE;
}
