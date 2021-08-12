import UserModel from '@core/models/user.model';

export const LOGO_TITLE: string = 'YouTube Client';

export const DEFAULT_USER: UserModel = {
  id: 'Default Id',
  name: 'Your Name',
  login: 'Your Login',
  password: 'Your Password',
  isAdmin: false,
};

export const MAX_USER_LOGIN_LENGTH: number = 10;

export const ERRORS_DESCRIPTIONS = {
  PAGE_NOT_FOUND: 'Sorry, something went wrong...',
};
