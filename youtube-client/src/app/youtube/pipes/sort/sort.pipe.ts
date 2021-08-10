import { Pipe, PipeTransform } from '@angular/core';

import { getDateValue, getViewCountValue } from '@youtube/common/tools';
import { compare } from '@youtube/common/helper';
import { SortingValues } from '@youtube/common/constants';

import SearchResultsItem from '@youtube/models/search-results-item.model';
import SortState from '@youtube/models/sort-state.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(
    searchResultsList: SearchResultsItem[],
    sortState?: SortState,
  ): SearchResultsItem[] {
    if (!sortState) return searchResultsList;

    const getCompareValue = (sortState.sortingBy === SortingValues.date)
      ? getDateValue
      : getViewCountValue;

    return [...searchResultsList].sort(
      (firstCompareItem: SearchResultsItem, secondCompareItem: SearchResultsItem) => compare(
        getCompareValue(firstCompareItem),
        getCompareValue(secondCompareItem),
        sortState.isIncreasing,
      ),
    );
  }
}
