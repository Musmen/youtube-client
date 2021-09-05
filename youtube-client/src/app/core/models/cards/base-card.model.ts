export default interface BaseCard {
  id: string
  title: string,
  description: string,
  posterUrl: string,
  publishedAt: string,
  videoUrl?: string,
  isCustom?: boolean,
}
