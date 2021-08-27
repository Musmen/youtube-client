import { createAction, props } from '@ngrx/store';
import SearchResultItem from '@youtube/models/search-results-item.model';

export const fetchSearchResults = createAction(
  '[MAIN PAGE] FETCH YOUTUBE VIDEOS',
);

export const fetchSearchResultsSuccessfully = createAction(
  '[MAIN PAGE] FETCH YOUTUBE VIDEOS SUCCESSFULLY',
  props<{ searchResults: SearchResultItem[] }>(),
);
