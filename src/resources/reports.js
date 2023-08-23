import Base from './base';

const ENDPOINT = 'api/reports';

export default class Reports extends Base {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }

  cashFlow(companyIds, initialDate, finalDate) {
    const params = new URLSearchParams({ 'initial_date': initialDate, 'final_date': finalDate });

    companyIds.forEach(id => params.append('company_ids[]', id));

    return this.doGet('cash_flow', params);
  }

  general(companyIds, initialDate, finalDate) {
    const params = new URLSearchParams({ 'initial_date': initialDate, 'final_date': finalDate });

    companyIds.forEach(id => params.append('company_ids[]', id));

    return this.doGet('general', params);
  }
}