import UserModel from '@app/models/user/user.model';
import SortingState from '@app/models/common/sorting-state.model';

export const LOGO_TITLE = 'YouTube Client';

export const DEFAULT_USER: UserModel = {
  id: 'Default Id',
  name: 'Your Name',
  login: 'Your Login',
  password: 'Your Password',
  isAdmin: false,
};

export const LabelsIcons : { [key: string]: string } = {
  viewCount: 'visibility',
  likeCount: 'favorite',
  dislikeCount: 'thumb_down',
  commentCount: 'chat',
};

export const DEFAULT_SORTING_STATE: SortingState = {
  sortingBy: '',
  isIncreasing: false,
};

export enum SortingValues {
  'date' = 'date',
  'viewCount' = 'viewCount',
}
