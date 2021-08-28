import SortingState from '@youtube/models/sort-state.model';
import SearchResultsItem from '@core/models/cards/search-results-item.model';

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

const MAX_RESULTS_PER_PAGE: number = 15;
export const YOUTUBE_API_URL = {
  BASE: 'https://www.googleapis.com/youtube/v3/',
  SEARCH: `search?type=video&part=snippet&maxResults=${MAX_RESULTS_PER_PAGE}&q=`,
  VIDEOS: 'videos?part=snippet,statistics&id=',
};

export const EMPTY_SEARCH_RESULTS_ITEM: SearchResultsItem = {
  id: '',
  publishedAt: '',
  title: '',
  description: '',
  posterUrl: '',
  statistics: {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    commentCount: '',
  },
};
