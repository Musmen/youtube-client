import YoutubeResponse from '@youtube/models/youtube-response/youtube-response.model';
import YoutubeResponseItem from '@youtube/models/youtube-response/youtube-response-item.model';
import SearchResultsItem from '@core/models/cards/search-results-item.model';
import CustomCard from '@core/models/cards/custom-card.model';

import { DEFAULT_POSTER_URL } from '@common/constants';
import { getTimeInMilliseconds } from './helper';
import { TIME_IN_MILLISECONDS, Colors } from './constants';

type ParseYoutubeResponseFunctionType = (mockYoutubeResponse: YoutubeResponse)
=> SearchResultsItem[];

const parseYoutubeResponse: ParseYoutubeResponseFunctionType = (
  mockYoutubeResponse,
) => mockYoutubeResponse
  .items
  .map(
    (item: YoutubeResponseItem) => (
      {
        id: item.id,
        publishedAt: item.snippet.publishedAt,
        title: item.snippet.title,
        description: item.snippet.description,
        posterUrl: (item.snippet.thumbnails.standard
          || item.snippet.thumbnails.medium
          || item.snippet.thumbnails.high
          || item.snippet.thumbnails.maxres
          || item.snippet.thumbnails.default).url
          || DEFAULT_POSTER_URL,
        statistics: item.statistics,
        videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
      }
    ),
  );

export const getParsedYoutubeResponse: ParseYoutubeResponseFunctionType = (
  youtubeResponse: YoutubeResponse,
) => parseYoutubeResponse(youtubeResponse);

type GetYouTubeResponseItemsIdsList = (response: YoutubeResponse)
=> string;

export const getYouTubeResponseItemsIdsList: GetYouTubeResponseItemsIdsList = (
  { items },
) => items
  .map(
    (item: YoutubeResponseItem) => item.id.videoId,
  )
  .join(',');

type GetValueType<T> = (item: T) => number | undefined;

export const getDateValue: GetValueType<SearchResultsItem | CustomCard> = (
  item: SearchResultsItem | CustomCard,
) => Number(getTimeInMilliseconds(item.publishedAt!));

export const getViewCountValue: GetValueType<SearchResultsItem | CustomCard> = (
  item: SearchResultsItem | CustomCard,
) => Number(item.statistics?.viewCount);

type GetNewColorType = (timeAfterPublication: number) => string;

export const getNewColor: GetNewColorType = (
  timeAfterPublication: number,
) => {
  if (timeAfterPublication > TIME_IN_MILLISECONDS.SIX_MONTHS) return Colors.red;
  if (timeAfterPublication < TIME_IN_MILLISECONDS.SEVEN_DAYS) return Colors.blue;
  if (timeAfterPublication < TIME_IN_MILLISECONDS.MONTH) return Colors.green;
  return Colors.yellow;
};
