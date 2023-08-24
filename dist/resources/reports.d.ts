import { AxiosResponse } from 'axios';
import Base from './base';
export default class Reports extends Base {
    constructor(subdomain: string, apiKey: string);
    cashFlow(companyIds: Array<number | string>, initialDate: Date | string, finalDate: Date | string): Promise<AxiosResponse>;
    general(companyIds: Array<number | string>, initialDate: Date | string, finalDate: Date | string): Promise<AxiosResponse>;
}
