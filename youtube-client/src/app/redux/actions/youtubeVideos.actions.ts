import { createAction, props } from '@ngrx/store';
import SearchResultItem from '@core/models/cards/search-results-item.model';

export const updateSearchResultsSuccessfully = createAction(
  '[MAIN PAGE] UPDATE YOUTUBE VIDEOS SUCCESSFULLY',
  props<{ searchResults: SearchResultItem[] }>(),
);
