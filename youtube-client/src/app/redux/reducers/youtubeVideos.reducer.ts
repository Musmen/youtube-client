import { createReducer, on } from '@ngrx/store';
import { updateSearchResultsSuccessfully } from '../actions/youtubeVideos.actions';
import { initialYoutubeVideosState } from '../state.model';

export const youtubeVideosReducer = createReducer(
  initialYoutubeVideosState,
  on(updateSearchResultsSuccessfully,
    (state, { searchResults }) => ({
      ...state,
      youtubeVideos: [...searchResults],
    })),
);
