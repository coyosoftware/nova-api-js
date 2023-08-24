"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const ENDPOINT = 'api/companies';
class Companies extends base_1.default {
    constructor(subdomain, apiKey) {
        super(subdomain, ENDPOINT, apiKey);
    }
    attachments(companyIds) {
        const params = new URLSearchParams();
        companyIds.forEach(id => params.append('company_ids[]', String(id)));
        return this.doGet('attachments', params);
    }
    list() {
        return this.doGet('/');
    }
    statement(companyIds, date) {
        const params = new URLSearchParams({ 'date': this.dateToISOString(date) });
        companyIds.forEach(id => params.append('company_ids[]', String(id)));
        return this.doGet('statement', params);
    }
}
exports.default = Companies;
