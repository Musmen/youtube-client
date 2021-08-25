import SearchResultItem from '@youtube/models/search-results-item.model';

export interface AppState {
  customCards: CustomCard[],
  youtubeVideos: SearchResultItem[],
  isLoading: boolean,
  isLoaded: boolean,
  error: Error | null,
}

export const initialAppState: AppState = {
  customCards: [],
  youtubeVideos: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};
