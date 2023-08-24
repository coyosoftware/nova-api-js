import { AxiosResponse } from 'axios';

import Base from './base';

const ENDPOINT = 'api/reports';

export default class Reports extends Base {
  constructor(subdomain: string, apiKey: string) {
    super(subdomain, ENDPOINT, apiKey);
  }

  cashFlow(companyIds: Array<number | string>, initialDate: Date | string, finalDate: Date | string): Promise<AxiosResponse> {
    const params = new URLSearchParams({ 'initial_date': this.dateToISOString(initialDate), 'final_date': this.dateToISOString(finalDate) });

    companyIds.forEach(id => params.append('company_ids[]', String(id)));

    return this.doGet('cash_flow', params);
  }

  general(companyIds: Array<number | string>, initialDate: Date | string, finalDate: Date | string): Promise<AxiosResponse> {
    const params = new URLSearchParams({ 'initial_date': this.dateToISOString(initialDate), 'final_date': this.dateToISOString(finalDate) });

    companyIds.forEach(id => params.append('company_ids[]', String(id)));

    return this.doGet('general', params);
  }
}