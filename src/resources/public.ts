import { AxiosResponse } from 'axios';

import Users from './users';

const SUBDOMAIN = 'public';

export default class Public {
  signIn(email: string, password: string): Promise<AxiosResponse> {
    return new Users(SUBDOMAIN).signIn(email, password);
  }
}