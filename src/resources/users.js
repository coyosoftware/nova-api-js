import Base from './base';

const ENDPOINT = 'api/users';

export default class Users extends Base {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }

  signIn(email, password) {
    return this.doPost('sign_in', { email, password });
  }

  subdomains() {
    return this.doGet('subdomains');
  }
}