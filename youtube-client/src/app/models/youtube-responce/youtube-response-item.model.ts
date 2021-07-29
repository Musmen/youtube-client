import YoutubeResponceThumbnails from './youtube-response-thumbnails.model';
import YoutubeResponceStatistics from './youtube-response-statistics.model';

export default interface YoutubeResponceItem {
  id: string,
  title: string,
  description: string,
  snippet: {
    publishedAt: string,
    thumbnails: {
      default: YoutubeResponceThumbnails,
      medium?: YoutubeResponceThumbnails,
      high?: YoutubeResponceThumbnails,
      standard?: YoutubeResponceThumbnails,
      maxres?: YoutubeResponceThumbnails,
    },
    localized?: {
      title: string,
      description: string,
    },
  },
  statistics: YoutubeResponceStatistics,
}
