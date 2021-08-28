import { createAction, props } from '@ngrx/store';
import SearchResultItem from '@youtube/models/search-results-item.model';

export const updateSearchResultsSuccessfully = createAction(
  '[MAIN PAGE] UPDATE YOUTUBE VIDEOS SUCCESSFULLY',
  props<{ searchResults: SearchResultItem[] }>(),
);
