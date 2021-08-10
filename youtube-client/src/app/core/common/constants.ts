import UserModel from '@core/models/user.model';

export const LOGO_TITLE = 'YouTube Client';

export const DEFAULT_USER: UserModel = {
  id: 'Default Id',
  name: 'Your Name',
  login: 'Your Login',
  password: 'Your Password',
  isAdmin: false,
};

export const MAX_USER_LOGIN_LENGTH = 10;
