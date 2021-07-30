export default interface User {
  id: string | number,
  name: string,
  login: string,
  password: string,
  avatarUrl?: string,
  isAdmin: boolean,
}
