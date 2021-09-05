import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { createCustomCard } from '@redux/actions/customCards.actions';
import { selectCustomCardsCount } from '@redux/selectors/customCards.selectors';
import { AppState } from '@redux/state.model';

import { LocationService } from '@core/services/location/location.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import CustomCard from '@core/models/cards/custom-card.model';
import { DEFAULT_POSTER_URL, SNACK_BAR } from '@common/constants';
import { ADD_CUSTOM_CARD_MESSAGE, DURATION_TIME_IN_MS, EMPTY_CUSTOM_CARD } from '@admin/common/constants';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  private _customCardId!: number;
  customCard!: CustomCard;

  constructor(
    private _store: Store<AppState>,
    private _snackBarService: MatSnackBar,
    private _locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this._setEmptyCurrentCard();

    const subscription = this._store.select(selectCustomCardsCount)
      .subscribe((customCardsCount) => {
        this._customCardId = customCardsCount;
      });

    this._subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _setEmptyCurrentCard(): void {
    this.customCard = { ...EMPTY_CUSTOM_CARD };
  }

  private _getCustomCardId(): number {
    return this._customCardId;
  }

  private _getCustomCardWithAdditionalData(customCard: CustomCard): CustomCard {
    return {
      ...customCard,
      posterUrl: customCard.posterUrl || DEFAULT_POSTER_URL,
      publishedAt: String(new Date()),
      id: String(this._getCustomCardId()),
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
    const newCustomCard = this._getCustomCardWithAdditionalData(customCard);
    this._store.dispatch(createCustomCard({ newCustomCard }));
    this._showSuccessMessage();
    this._setEmptyCurrentCard();
  }
}
