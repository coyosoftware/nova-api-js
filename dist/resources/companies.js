"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ENDPOINT = 'api/companies';
class Companies extends _base.default {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }
  attachments(companyIds) {
    const params = new URLSearchParams();
    companyIds.forEach(id => params.append('company_ids[]', id));
    return this.doGet('attachments', params);
  }
  statement(companyIds, date) {
    const params = new URLSearchParams({
      'date': date
    });
    companyIds.forEach(id => params.append('company_ids[]', id));
    return this.doGet('statement', params);
  }
}
exports.default = Companies;