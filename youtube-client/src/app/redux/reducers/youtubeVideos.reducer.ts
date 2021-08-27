import { createReducer, on } from '@ngrx/store';
import { fetchSearchResultsSuccessfully } from '../actions/youtubeVideos.actions';
import { initialYoutubeVideosState } from '../state.model';

export const youtubeVideosReducer = createReducer(
  initialYoutubeVideosState,
  on(fetchSearchResultsSuccessfully,
    (state, { searchResults }) => ({
      ...state,
      youtubeVideos: [...searchResults],
    })),
);
