import YoutubeResponceItem from './youtube-response-item.model';

export default interface YoutubeResponce {
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: YoutubeResponceItem[],
}
