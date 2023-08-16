"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ENDPOINT = 'api/users';
class Users extends _base.default {
  constructor(subdomain, apiKey) {
    super(subdomain, ENDPOINT, apiKey);
  }
  signIn(email, password) {
    return this.doPost('sign_in', {
      email,
      password
    });
  }
  subdomains() {
    return this.doGet('subdomains');
  }
}
exports.default = Users;