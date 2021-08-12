import UserModel from '@app/auth/models/user.model';

export const DEFAULT_USER: UserModel = {
  login: '',
  password: '',
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken-YouTubeClient',
  USER: 'User-YouTubeClient',
};
