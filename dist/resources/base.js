"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Base_endpoint, _Base_subdomain, _Base_apiKey;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const SCHEME = 'https';
const HOST = 'nova.money';
class Base {
    constructor(subdomain, endpoint, apiKey) {
        _Base_endpoint.set(this, void 0);
        _Base_subdomain.set(this, void 0);
        _Base_apiKey.set(this, void 0);
        __classPrivateFieldSet(this, _Base_subdomain, subdomain, "f");
        __classPrivateFieldSet(this, _Base_endpoint, endpoint, "f");
        __classPrivateFieldSet(this, _Base_apiKey, apiKey, "f");
    }
    get baseUrl() {
        return __classPrivateFieldGet(this, _Base_endpoint, "f").startsWith('/') ? `${SCHEME}://${__classPrivateFieldGet(this, _Base_subdomain, "f")}.${HOST}${__classPrivateFieldGet(this, _Base_endpoint, "f")}` : `${SCHEME}://${__classPrivateFieldGet(this, _Base_subdomain, "f")}.${HOST}/${__classPrivateFieldGet(this, _Base_endpoint, "f")}`;
    }
    dateToISOString(date) {
        return (date instanceof Date) ? date.toISOString() : date;
    }
    doGet(path, params) {
        const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;
        let config = {};
        if (__classPrivateFieldGet(this, _Base_apiKey, "f")) {
            config['headers'] = { 'Api-Token': __classPrivateFieldGet(this, _Base_apiKey, "f") };
        }
        if (params) {
            config['params'] = params;
        }
        return axios_1.default.get(url, config);
    }
    doPost(path, data) {
        const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;
        return axios_1.default.post(url, data);
    }
}
_Base_endpoint = new WeakMap(), _Base_subdomain = new WeakMap(), _Base_apiKey = new WeakMap();
exports.default = Base;
