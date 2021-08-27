import { customCardsReducer } from './reducers/customCards.reducer';
import { youtubeVideosReducer } from './reducers/youtubeVideos.reducer';

export const appState = {
  customCards: customCardsReducer,
  youtubeVideos: youtubeVideosReducer,
};
