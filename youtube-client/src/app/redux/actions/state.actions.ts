import { createAction, props } from '@ngrx/store';
import CustomCard from '@app/models/custom-card/custom-card.model';

export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE CUSTOM CARD',
  props<{ newCustomCard: CustomCard }>(),
);

export const getCustomCardsList = createAction(
  '[MAIN PAGE] GET ALL CUSTOM CARDS',
);
