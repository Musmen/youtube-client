import UserModel from '@app/auth/models/user.model';

export const DEFAULT_USER: UserModel = {
  login: '',
  password: '',
};

export const STORAGE_KEYS = {
  CURRENT_AUTH_TOKEN: 'authToken-YouTubeClient',
  USER: 'user-YouTubeClient',
};

export const DEFAULT_USER_LOGIN_TITLE: string = 'Your Login';
