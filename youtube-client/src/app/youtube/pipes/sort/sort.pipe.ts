import { Pipe, PipeTransform } from '@angular/core';

import { getDateValue, getViewCountValue } from '@youtube/common/tools';
import { compare } from '@youtube/common/helper';
import { SortingValues } from '@youtube/common/constants';

import SortState from '@youtube/models/sort-state.model';
import SearchResultItem from '@youtube/models/search-results-item.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(
    list: SearchResultItem[],
    sortState?: SortState,
  ): SearchResultItem[] {
    if (!sortState) return list;

    const getCompareValue = (sortState.sortingBy === SortingValues.date)
      ? getDateValue
      : getViewCountValue;

    return [...list].sort(
      (firstCompareItem: SearchResultItem, secondCompareItem: SearchResultItem) => compare(
        getCompareValue(firstCompareItem),
        getCompareValue(secondCompareItem),
        sortState.ascending,
      ),
    );
  }
}
