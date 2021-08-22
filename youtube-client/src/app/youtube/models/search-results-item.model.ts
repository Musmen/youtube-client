import YoutubeResponceItem from './youtube-response/youtube-response-item.model';
import YoutubeResponceStatistics from './youtube-response/youtube-response-statistics.model';
import YoutubeResponceThumbnails from './youtube-response/youtube-response-thumbnails.model';

export default interface SearchResultItem {
  id: YoutubeResponceItem['id'],
  publishedAt: YoutubeResponceItem['snippet']['publishedAt'],
  title: YoutubeResponceItem['snippet']['title'],
  description: YoutubeResponceItem['snippet']['description'],
  posterUrl: YoutubeResponceThumbnails['url'],
  statistics: {
    viewCount: YoutubeResponceStatistics['viewCount'],
    likeCount: YoutubeResponceStatistics['likeCount'],
    dislikeCount: YoutubeResponceStatistics['dislikeCount'],
    commentCount: YoutubeResponceStatistics['commentCount'],
  },
}
