import SortingState from '@youtube/models/sort-state.model';

export const LabelsIcons : { [key: string]: string } = {
  viewCount: 'visibility',
  likeCount: 'favorite',
  dislikeCount: 'thumb_down',
  commentCount: 'chat',
};

export const DEFAULT_SORT_STATE: SortingState = {
  sortingBy: '',
  ascending: 1,
};

export enum SortingValues {
  date = 'date',
  viewCount = 'viewCount',
}

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_MONTH = 30;
const DAY_IN_MILLISECONDS = MILLISECONDS_IN_SECOND
* SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

export const TIME_IN_MILLISECONDS = {
  SEVEN_DAYS: 7 * DAY_IN_MILLISECONDS,
  MONTH: DAY_IN_MILLISECONDS * DAYS_IN_MONTH,
  SIX_MONTHS: 6 * DAY_IN_MILLISECONDS * DAYS_IN_MONTH,
};

export enum Colors {
  red = '#EB5757',
  blue = '#2F80ED',
  green = '#27AE60',
  yellow = '#F2C94C',
}
