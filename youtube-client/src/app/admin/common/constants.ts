import CustomCard from '@core/models/cards/custom-card.model';

export const EMPTY_CUSTOM_CARD: CustomCard = {
  id: '',
  title: '',
  description: '',
  posterUrl: '',
  videoUrl: '',
  publishedAt: '',
  isCustom: true,
};

export const ADD_CUSTOM_CARD_MESSAGE = 'Custom card created';

export const DURATION_TIME_IN_MS = 1000;
