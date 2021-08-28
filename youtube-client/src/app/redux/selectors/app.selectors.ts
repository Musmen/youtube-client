import { createSelector } from '@ngrx/store';

import SearchResultItem from '@core/models/cards/search-results-item.model';
import CustomCard from '@core/models/cards/custom-card.model';

import { selectCustomCards } from './customCards.selectors';
import { selectYoutubeVideos } from './youtubeVideos.selectors';

export const selectAllCards = createSelector(
  selectCustomCards,
  selectYoutubeVideos,
  (
    customCards: CustomCard[],
    youtubeVideos: SearchResultItem[],
  ) => [...customCards, ...youtubeVideos],
);
