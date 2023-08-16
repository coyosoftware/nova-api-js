"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _users = _interopRequireDefault(require("./users"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SUBDOMAIN = 'public';
class Public {
  signIn(email, password) {
    return new _users.default(SUBDOMAIN).signIn(email, password);
  }
}
exports.default = Public;