import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomCardsState } from '../state.model';

export const selectState = createFeatureSelector<CustomCardsState>('customCards');

export const selectCustomCards = createSelector(
  selectState,
  (state: CustomCardsState) => state.customCards,
);

export const selectCustomCardsCount = createSelector(
  selectState,
  (state: CustomCardsState) => state.customCards.length,
);
