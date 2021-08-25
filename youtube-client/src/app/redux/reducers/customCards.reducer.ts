import { createReducer, on } from '@ngrx/store';
import { createNewCustomCard, getCustomCardsListcrement } from './actions/customCards';

export const initialState = 0;

const _customCardsReducer = createReducer(
  initialState,
  on(createNewCustomCard, (state) => state + 1),
  on(getCustomCardsListcrement, (state) => state - 1),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}