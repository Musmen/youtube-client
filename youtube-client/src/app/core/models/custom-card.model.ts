export default interface CustomCard {
  id?: string,
  title: string,
  description: string,
  posterUrl: string,
  publishedAt?: string,
  statistics?: {
    viewCount?: string,
  }
  videoUrl: string,
}
