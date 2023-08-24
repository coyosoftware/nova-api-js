"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const ENDPOINT = 'api/reports';
class Reports extends base_1.default {
    constructor(subdomain, apiKey) {
        super(subdomain, ENDPOINT, apiKey);
    }
    cashFlow(companyIds, initialDate, finalDate) {
        const params = new URLSearchParams({ 'initial_date': this.dateToISOString(initialDate), 'final_date': this.dateToISOString(finalDate) });
        companyIds.forEach(id => params.append('company_ids[]', String(id)));
        return this.doGet('cash_flow', params);
    }
    general(companyIds, initialDate, finalDate) {
        const params = new URLSearchParams({ 'initial_date': this.dateToISOString(initialDate), 'final_date': this.dateToISOString(finalDate) });
        companyIds.forEach(id => params.append('company_ids[]', String(id)));
        return this.doGet('general', params);
    }
}
exports.default = Reports;
