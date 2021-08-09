import { Pipe, PipeTransform } from '@angular/core';

import { getDateValue, getViewCountValue } from '@app/common/tools';
import { compare } from '@app/common/helper';
import { SortingValues } from '@app/common/constants';

import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import SortState from '@app/models/common/sort-state.model';

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
