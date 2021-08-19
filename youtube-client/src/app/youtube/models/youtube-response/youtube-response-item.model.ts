import YoutubeResponseThumbnails from './youtube-response-thumbnails.model';
import YoutubeResponseStatistics from './youtube-response-statistics.model';

export default interface YoutubeResponseItem {
  id: {
    kind: string,
    videoId: string,
  } | any,
  snippet: {
    publishedAt: string,
    title: string,
    description: string,
    thumbnails: {
      default: YoutubeResponseThumbnails,
      medium?: YoutubeResponseThumbnails,
      high?: YoutubeResponseThumbnails,
      standard: YoutubeResponseThumbnails,
      maxres?: YoutubeResponseThumbnails,
    },
    localized?: {
      title: string,
      description: string,
    },
  },
  statistics: YoutubeResponseStatistics,
}
