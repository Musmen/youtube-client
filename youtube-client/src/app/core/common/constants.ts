import UserModel from '@core/models/user.model';
import { SnackBar } from '@core/models/snack-bar.model';

export const LOGO_TITLE: string = 'YouTube Client';

export const ERRORS_DESCRIPTIONS = {
  PAGE_NOT_FOUND: 'Sorry, something went wrong...',
  HTTP: 'Sorry, something wrong with Internet connection...',
};

export const MAX_USER_LOGIN_LENGTH: number = 10;

export const DEBOUNCE_TIME_IN_MS: number = 400;

export const MIN_SEARCH_VALUE_LENGTH: number = 3;

export const DEFAULT_USER_LOGIN_TITLE: string = 'Your Login';

export const DEFAULT_USER: UserModel = {
  login: '',
  password: '',
};

export const STORAGE_KEYS = {
  CURRENT_AUTH_TOKEN: 'authToken-YouTubeClient',
  USER: 'user-YouTubeClient',
};

const DURATION_TIME_IN_MS = 3000;

export const SNACK_BAR: SnackBar = {
  CONFIG: {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: DURATION_TIME_IN_MS,
  },
  ACTION: '',
};
