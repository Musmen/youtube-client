import YoutubeResponseItem from './youtube-response-item.model';

export default interface YoutubeResponse {
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: YoutubeResponseItem[],
}
