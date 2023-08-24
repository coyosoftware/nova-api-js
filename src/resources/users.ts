import { AxiosResponse } from 'axios';
import Base from './base';

const ENDPOINT = 'api/users';

export default class Users extends Base {
  constructor(subdomain: string, apiKey?: string) {
    super(subdomain, ENDPOINT, apiKey);
  }

  signIn(email: string, password: string): Promise<AxiosResponse> {
    return this.doPost('sign_in', { email, password });
  }

  subdomains(): Promise<AxiosResponse> {
    return this.doGet('subdomains');
  }
}
