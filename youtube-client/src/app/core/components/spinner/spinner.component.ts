import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpinnerService } from '@app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isSpinnerShown$: Observable<boolean> = this._spinnerService.getIsSpinnerShown$();

  constructor(private _spinnerService: SpinnerService) { }
}
