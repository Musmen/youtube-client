import { Pipe, PipeTransform } from '@angular/core';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import CustomCard from '@core/models/custom-card.model';
import { getTrimmedStringInLowerCase } from '@youtube/common/helper';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(
    list: (SearchResultsItem | CustomCard)[],
    filteringValue?: string,
  ): (SearchResultsItem | CustomCard)[] {
    return filteringValue
      ? list
        .filter(
          (item: SearchResultsItem | CustomCard) => getTrimmedStringInLowerCase(
            item.title,
          ).includes(getTrimmedStringInLowerCase(filteringValue)),
        )
      : list;
  }
}
