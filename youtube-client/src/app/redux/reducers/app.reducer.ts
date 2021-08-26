import { createReducer, on } from '@ngrx/store';
import { createCustomCard } from '../actions/state.actions';
import { AppState, initialAppState } from '../state.model';

export const appReducer = createReducer(
  initialAppState,
  on(createCustomCard,
    (state: AppState, { newCustomCard }) => ({
      ...state,
      customCards: [...state.customCards, newCustomCard],
    })),
);
