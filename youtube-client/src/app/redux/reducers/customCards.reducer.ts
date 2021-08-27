import { createReducer, on } from '@ngrx/store';
import { createCustomCard } from '../actions/customCards.actions';
import { initialCustomCardsState } from '../state.model';

export const customCardsReducer = createReducer(
  initialCustomCardsState,
  on(createCustomCard,
    (state, { newCustomCard }) => ({
      ...state,
      customCards: [...state.customCards, newCustomCard],
    })),
);
