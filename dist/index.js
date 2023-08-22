"use strict";

var _companies = _interopRequireDefault(require("./resources/companies"));
var _public = _interopRequireDefault(require("./resources/public"));
var _reports = _interopRequireDefault(require("./resources/reports"));
var _users = _interopRequireDefault(require("./resources/users"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class NovaApi {
  #subdomain;
  #apiKey;
  constructor(subdomain, apiKey) {
    this.#subdomain = subdomain;
    this.#apiKey = apiKey;
  }
  get companies() {
    return new _companies.default(this.#subdomain, this.#apiKey);
  }
  get public() {
    return new _public.default();
  }
  get reports() {
    return new _reports.default(this.#subdomain, this.#apiKey);
  }
  get users() {
    return new _users.default(this.#subdomain, this.#apiKey);
  }
}
module.exports = NovaApi;