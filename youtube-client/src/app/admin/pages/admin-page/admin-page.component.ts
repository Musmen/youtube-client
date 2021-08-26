import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { createCustomCard } from '@redux/actions/state.actions';
import { selectCustomCardsCount } from '@app/redux/selectors/app.selectors';
import { AppState } from '@app/redux/state.model';

import { LocationService } from '@app/core/services/location/location.service';
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
export class AdminPageComponent implements OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  private _currentCustomCardId!: number;

  customCard: CustomCard = EMPTY_CUSTOM_CARD;

  constructor(
    private _store: Store<AppState>,
    private _snackBarService: MatSnackBar,
    private _locationService: LocationService,
  ) {
    const subscription = this._store.select(selectCustomCardsCount)
      .subscribe((customCardsCount) => {
        this._currentCustomCardId = customCardsCount;
      });

    this._subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _getCustomCardWithDateAndId(customCard: CustomCard): CustomCard {
    return {
      ...customCard,
      publishedAt: String(Date.now()),
      id: String(this._currentCustomCardId),
    };
  }

  private _showSuccessMessage() {
    this._snackBarService.open(ADD_CUSTOM_CARD_MESSAGE, SNACK_BAR.ACTION, {
      ...SNACK_BAR.CONFIG,
      duration: DURATION_TIME_IN_MS,
    });
  }

  goToMainPage(): void {
    this._locationService.goToMainPage();
  }

  addCustomCard(customCard: CustomCard) {
    const newCustomCard = this._getCustomCardWithDateAndId(customCard);
    this._store.dispatch(createCustomCard({ newCustomCard }));
    this._showSuccessMessage();
  }
}
