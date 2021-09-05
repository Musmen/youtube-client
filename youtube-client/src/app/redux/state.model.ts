import SearchResultItem from '@core/models/cards/search-results-item.model';
import CustomCard from '@core/models/cards/custom-card.model';

export interface AppState {
  customCards: CustomCardsState,
  youtubeVideos: YoutubeVideosState,
}

export interface CustomCardsState {
  customCards: CustomCard[],
}

export interface YoutubeVideosState {
  youtubeVideos: SearchResultItem[],
}

export const initialCustomCardsState: CustomCardsState = {
  customCards: [],
};

export const initialYoutubeVideosState: YoutubeVideosState = {
  youtubeVideos: [],
};

export const initialAppState: AppState = {
  customCards: initialCustomCardsState,
  youtubeVideos: initialYoutubeVideosState,
};
