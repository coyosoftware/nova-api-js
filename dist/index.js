"use strict";

var _public = _interopRequireDefault(require("./resources/public"));
var _users = _interopRequireDefault(require("./resources/users"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class NovaApi {
  #subdomain;
  #apiKey;
  constructor(subdomain, apiKey) {
    this.#subdomain = subdomain;
    this.#apiKey = apiKey;
  }
  get public() {
    return new _public.default();
  }
  get users() {
    return new _users.default(this.#subdomain, this.#apiKey);
  }
}
module.exports = NovaApi;