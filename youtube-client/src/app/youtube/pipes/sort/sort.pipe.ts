import { Pipe, PipeTransform } from '@angular/core';

import { getDateValue, getViewCountValue } from '@youtube/common/tools';
import { compare } from '@youtube/common/helper';
import { SortingValues } from '@youtube/common/constants';

import SortState from '@youtube/models/sort-state.model';
import SearchResultItem from '@youtube/models/search-results-item.model';
import CustomCard from '@core/models/custom-card.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(
    list: (SearchResultItem | CustomCard)[],
    sortState?: SortState,
  ): (SearchResultItem | CustomCard)[] {
    if (!sortState) return list;

    const getCompareValue = (sortState.sortingBy === SortingValues.date)
      ? getDateValue
      : getViewCountValue;

    return [...list].sort(
      (
        firstCompareItem: SearchResultItem | CustomCard,
        secondCompareItem: SearchResultItem | CustomCard,
      ) => compare(
        getCompareValue(firstCompareItem) || 0,
        getCompareValue(secondCompareItem) || 0,
        sortState.ascending,
      ),
    );
  }
}
