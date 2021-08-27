import { createSelector, createFeatureSelector } from '@ngrx/store';
import { YoutubeVideosState } from '../state.model';

export const selectState = createFeatureSelector<YoutubeVideosState>('youtubeVideos');

export const selectYoutubeVideos = createSelector(
  selectState,
  (state: YoutubeVideosState) => state.youtubeVideos,
);
