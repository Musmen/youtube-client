import YoutubeResponce from '@app/models/youtube-response/youtube-response.model';
import YoutubeResponceItem from '@app/models/youtube-response/youtube-response-item.model';
import SearchResultsItem from '@app/models/search-results/search-results-item.model';

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

type CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  isIncreasing: boolean,
) => number;

export const compare: CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  isIncreasing: boolean,
) => {
  if (isIncreasing) {
    return firstCompareItem - secondCompareItem;
  }
  return secondCompareItem - firstCompareItem;
};

type GetValueType = (item: SearchResultsItem) => number;

export const getDateValue: GetValueType = (
  item: SearchResultsItem,
) => Number(new Date(item.publishedAt).getTime());

export const getViewCountValue: GetValueType = (
  item: SearchResultsItem,
) => Number(item.statistics.viewCount);
