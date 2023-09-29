import { AxiosResponse } from 'axios';

import Base from './base';

const ENDPOINT = 'api/companies';

export default class Companies extends Base {
  constructor(subdomain: string, apiKey: string) {
    super(subdomain, ENDPOINT, apiKey);
  }

  attachments(companyIds: Array<number | string>): Promise<AxiosResponse> {
    const params = new URLSearchParams();

    companyIds.forEach(id => params.append('company_ids[]', String(id)));

    return this.doGet('attachments', params);
  }

  shareholders(companyId: number): Promise<AxiosResponse> {
    return this.doGet(`${companyId}/shareholders`);
  }

  list(): Promise<AxiosResponse> {
    return this.doGet('/');
  }

  statement(companyIds: Array<number | string>, date: Date | string): Promise<AxiosResponse> {
    const params = new URLSearchParams({ 'date': this.dateToISOString(date) });

    companyIds.forEach(id => params.append('company_ids[]', String(id)));

    return this.doGet('statement', params);
  }
}