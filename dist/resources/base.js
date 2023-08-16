"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SCHEME = 'https';
const HOST = 'nova.money';
class Base {
  #endpoint;
  #subdomain;
  #apiKey;
  constructor(subdomain, endpoint, apiKey) {
    this.#subdomain = subdomain;
    this.#endpoint = endpoint;
    this.#apiKey = apiKey;
  }
  get baseUrl() {
    if (!this.#subdomain) {
      throw 'The subdomain must be informed';
    }
    if (!this.#endpoint) {
      throw 'The endpoint must be informed';
    }
    return this.#endpoint.startsWith('/') ? `${SCHEME}://${this.#subdomain}.${HOST}${this.#endpoint}` : `${SCHEME}://${this.#subdomain}.${HOST}/${this.#endpoint}`;
  }
  doGet(path) {
    const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;
    let config = {};
    if (this.#apiKey) {
      config['headers'] = {
        'Api-Token': this.#apiKey
      };
    }
    return _axios.default.get(url, config);
  }
  doPost(path, data) {
    const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;
    return _axios.default.post(url, data);
  }
}
exports.default = Base;