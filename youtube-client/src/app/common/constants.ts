import UserModel from '@app/models/user/user.model';

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
  favoriteCount: 'favorite',
  dislikeCount: 'thumb_down',
  commentCount: 'chat',
};
