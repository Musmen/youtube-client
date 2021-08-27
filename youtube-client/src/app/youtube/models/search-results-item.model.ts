export default interface SearchResultItem {
  id: string
  title: string,
  description: string,
  posterUrl: string,
  publishedAt: string,
  statistics?: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    commentCount: string,
  },
}
