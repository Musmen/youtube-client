import { createAction, props } from '@ngrx/store';

export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE CUSTOM CARD',
  props<{ card: CustomCard }>(),
);

export const getCustomCardsList = createAction(
  '[MAIN PAGE] GET CUSTOM CARDS LIST',
);
