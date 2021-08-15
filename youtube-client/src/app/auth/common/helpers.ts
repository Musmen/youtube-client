import User from '@auth/models/user.model';

const HEX_RADIX: number = 16;
const INDEX_AFTER_DOT: number = 2;
export const generateAuthToken = (
  user: User,
): string => `${user.login}-${Math.random().toString(HEX_RADIX).slice(INDEX_AFTER_DOT)}`;
