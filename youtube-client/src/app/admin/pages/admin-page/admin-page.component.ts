import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { createCustomCard } from '@redux/actions/state.actions';

import { MatSnackBar } from '@angular/material/snack-bar';
import CustomCard from '@app/models/custom-card/custom-card.model';
import { ADD_CUSTOM_CARD_MESSAGE, DURATION_TIME_IN_MS, EMPTY_CUSTOM_CARD } from '@app/admin/common/constants';
import { SNACK_BAR } from '@common/constants';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent {
  customCard: CustomCard = EMPTY_CUSTOM_CARD;

  constructor(private _store: Store, private _snackBarService: MatSnackBar) { }

  private _getCustomCardWithDate(customCard: CustomCard): CustomCard {
    return {
      ...customCard,
      creationDate: Date.now(),
    };
  }

  private _showSuccessMessage() {
    this._snackBarService.open(ADD_CUSTOM_CARD_MESSAGE, SNACK_BAR.ACTION, {
      ...SNACK_BAR.CONFIG,
      duration: DURATION_TIME_IN_MS,
    });
  }

  addCustomCard(customCard: CustomCard) {
    const newCustomCard = this._getCustomCardWithDate(customCard);
    this._store.dispatch(createCustomCard({ newCustomCard }));
    this._showSuccessMessage();
  }
}
