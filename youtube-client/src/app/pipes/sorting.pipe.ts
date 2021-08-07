import { Pipe, PipeTransform } from '@angular/core';

import { getDateValue, getViewCountValue } from '@app/common/tools';
import { compare } from '@app/common/helper';
import { SortingValues } from '@app/common/constants';

import SearchResultsItem from '@app/models/search-results/search-results-item.model';
import SortingState from '@app/models/common/sorting-state.model';

@Pipe({ name: 'sorting' })
export class SortingPipe implements PipeTransform {
  transform(
    searchResultsList: SearchResultsItem[],
    sortingState?: SortingState,
  ): SearchResultsItem[] {
    if (!sortingState) return searchResultsList;

    const getCompareValue = (sortingState.sortingBy === SortingValues.date)
      ? getDateValue
      : getViewCountValue;

    return [...searchResultsList].sort(
      (firstCompareItem: SearchResultsItem, secondCompareItem: SearchResultsItem) => compare(
        getCompareValue(firstCompareItem),
        getCompareValue(secondCompareItem),
        sortingState.isIncreasing,
      ),
    );
  }
}
