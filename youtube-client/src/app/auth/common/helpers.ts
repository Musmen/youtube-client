import User from '@auth/models/user.model';

export const generateAuthToken = (user: User): string => `${user.login}${Math.random()}`;
