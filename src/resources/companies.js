import Base from './base';

const ENDPOINT = 'api/companies';

export default class Companies extends Base {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }

  attachments(companyIds) {
    const params = new URLSearchParams();

    companyIds.forEach(id => params.append('company_ids[]', id));

    return this.doGet('attachments', params);
  }

  statement(companyIds, date) {
    const params = new URLSearchParams({ 'date': date });

    companyIds.forEach(id => params.append('company_ids[]', id));

    return this.doGet('statement', params);
  }
}