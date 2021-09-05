import BaseCard from './base-card.model';

export default interface SearchResultItem extends BaseCard {
  statistics?: {
    viewCount?: string,
    likeCount?: string,
    dislikeCount?: string,
    commentCount?: string,
  },
}
