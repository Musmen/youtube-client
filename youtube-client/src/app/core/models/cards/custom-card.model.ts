import SearchResultItem from './search-results-item.model';

export default interface CustomCard extends SearchResultItem {
  videoUrl: string,
  isCustom: boolean,
}
