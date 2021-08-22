import { Pipe, PipeTransform } from '@angular/core';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import { getTrimmedStringInLowerCase } from '@youtube/common/helper';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(list: SearchResultsItem[], filteringValue?: string): SearchResultsItem[] {
    return filteringValue
      ? list
        .filter(
          (item: SearchResultsItem) => getTrimmedStringInLowerCase(
            item.title,
          ).includes(getTrimmedStringInLowerCase(filteringValue)),
        )
      : list;
  }
}
