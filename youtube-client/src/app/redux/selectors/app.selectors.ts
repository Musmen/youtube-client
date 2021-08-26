import { AppState } from '../state.model';

type CustomCardsSelector = (state: AppState) => AppState['customCards'];

export const selectCustomCards: CustomCardsSelector = (
  state: AppState,
) => state.customCards;

type CustomCardsCountSelector = (state: AppState) => number;

export const selectCustomCardsCount: CustomCardsCountSelector = (
  state: AppState,
) => state.customCards.length;
