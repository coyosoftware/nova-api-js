import { AxiosResponse } from 'axios';
export default class Base {
    #private;
    constructor(subdomain: string, endpoint: string, apiKey?: string);
    get baseUrl(): string;
    dateToISOString(date: Date | string): string;
    doGet(path: string, params?: URLSearchParams | Object): Promise<AxiosResponse>;
    doPost(path: string, data: Object): Promise<AxiosResponse>;
}
