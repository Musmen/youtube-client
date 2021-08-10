import YoutubeResponce from '@youtube/models/youtube-response/youtube-response.model';
import YoutubeResponceItem from '@youtube/models/youtube-response/youtube-response-item.model';
import SearchResultsItem from '@youtube/models/search-results-item.model';

import { getTimeInMilliseconds } from './helper';
import { TIME_IN_MILLISECONDS, Colors } from './constants';

type ParseYoutubeResponseFunctionType = (mockYoutubeResponse: YoutubeResponce)
=> SearchResultsItem[];

const parseYoutubeResponse: ParseYoutubeResponseFunctionType = (
  mockYoutubeResponse,
) => mockYoutubeResponse
  .items
  .map(
    (item: YoutubeResponceItem) => (
      {
        id: item.id,
        publishedAt: item.snippet.publishedAt,
        title: item.snippet.title,
        description: item.snippet.description,
        posterUrl: item.snippet.thumbnails.default.url,
        statistics: item.statistics,
      }
    ),
  );

export const getParsedYoutubeResponse: ParseYoutubeResponseFunctionType = (
  mockYoutubeResponse: YoutubeResponce,
) => parseYoutubeResponse(mockYoutubeResponse);

type GetValueType = (item: SearchResultsItem) => number;

export const getDateValue: GetValueType = (
  item: SearchResultsItem,
) => Number(getTimeInMilliseconds(item.publishedAt));

export const getViewCountValue: GetValueType = (
  item: SearchResultsItem,
) => Number(item.statistics.viewCount);

type GetNewBorderColorType = (timeAfterPublication: number) => string;

export const getNewBorderColor: GetNewBorderColorType = (
  timeAfterPublication: number,
) => {
  if (timeAfterPublication > TIME_IN_MILLISECONDS.SIX_MONTHS) return Colors.red;
  if (timeAfterPublication < TIME_IN_MILLISECONDS.SEVEN_DAYS) return Colors.blue;
  if (timeAfterPublication < TIME_IN_MILLISECONDS.MONTH) return Colors.green;
  return Colors.yellow;
};
