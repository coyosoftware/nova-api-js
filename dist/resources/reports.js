"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ENDPOINT = 'api/reports';
class Reports extends _base.default {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }
  general(companyIds, initialDate, finalDate) {
    const params = new URLSearchParams({
      'initial_date': initialDate,
      'final_date': finalDate
    });
    companyIds.forEach(id => params.append('company_ids[]', id));
    return this.doGet('general', params);
  }
}
exports.default = Reports;