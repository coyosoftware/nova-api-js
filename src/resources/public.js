import Users from './users';

const SUBDOMAIN = 'public';

export default class Public {
  signIn(email, password) {
    return new Users(SUBDOMAIN).signIn(email, password);
  }
}