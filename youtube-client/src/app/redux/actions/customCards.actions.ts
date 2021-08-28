import { createAction, props } from '@ngrx/store';
import CustomCard from '@core/models/cards/custom-card.model';

export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE CUSTOM CARD',
  props<{ newCustomCard: CustomCard }>(),
);
