import { Pipe, PipeTransform } from '@angular/core';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import { getTrimmedStringInLowerCase } from '@youtube/common/helper';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(searchResultsList: SearchResultsItem[], filteringValue?: string): SearchResultsItem[] {
    return filteringValue
      ? searchResultsList
        .filter(
          (searchResultsItem: SearchResultsItem) => getTrimmedStringInLowerCase(
            searchResultsItem.title,
          ).includes(getTrimmedStringInLowerCase(filteringValue)),
        )
      : searchResultsList;
  }
}
