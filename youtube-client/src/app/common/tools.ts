import YoutubeResponce from '@app/models/youtube-response/youtube-response.model';
import YoutubeResponceItem from '@app/models/youtube-response/youtube-response-item.model';
import searchResultsItem from '@app/models/search-results/search-results-item.model';

export const parseYoutubeResponse: (mockYoutubeResponse: YoutubeResponce)
=> searchResultsItem[] = (mockYoutubeResponse) => mockYoutubeResponse
  .items
  .map((item: YoutubeResponceItem) => ({
    id: item.id,
    publishedAt: item.snippet.publishedAt,
    title: item.snippet.title,
    description: item.snippet.description,
    posterUrl: item.snippet.thumbnails.default.url,
    statistics: item.statistics,
  }));
