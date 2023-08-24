import { AxiosResponse } from 'axios';
import Base from './base';
export default class Companies extends Base {
    constructor(subdomain: string, apiKey: string);
    attachments(companyIds: Array<number | string>): Promise<AxiosResponse>;
    list(): Promise<AxiosResponse>;
    statement(companyIds: Array<number | string>, date: Date | string): Promise<AxiosResponse>;
}
