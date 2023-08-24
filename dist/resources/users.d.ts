import { AxiosResponse } from 'axios';
import Base from './base';
export default class Users extends Base {
    constructor(subdomain: string, apiKey?: string);
    signIn(email: string, password: string): Promise<AxiosResponse>;
    subdomains(): Promise<AxiosResponse>;
}
