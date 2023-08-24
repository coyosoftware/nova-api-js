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
var _NovaApi_subdomain, _NovaApi_apiKey;
Object.defineProperty(exports, "__esModule", { value: true });
const companies_1 = require("./resources/companies");
const public_1 = require("./resources/public");
const reports_1 = require("./resources/reports");
const users_1 = require("./resources/users");
class NovaApi {
    constructor(subdomain, apiKey) {
        _NovaApi_subdomain.set(this, void 0);
        _NovaApi_apiKey.set(this, void 0);
        __classPrivateFieldSet(this, _NovaApi_subdomain, subdomain, "f");
        __classPrivateFieldSet(this, _NovaApi_apiKey, apiKey, "f");
    }
    get companies() {
        return new companies_1.default(__classPrivateFieldGet(this, _NovaApi_subdomain, "f"), __classPrivateFieldGet(this, _NovaApi_apiKey, "f"));
    }
    get public() {
        return new public_1.default();
    }
    get reports() {
        return new reports_1.default(__classPrivateFieldGet(this, _NovaApi_subdomain, "f"), __classPrivateFieldGet(this, _NovaApi_apiKey, "f"));
    }
    get users() {
        return new users_1.default(__classPrivateFieldGet(this, _NovaApi_subdomain, "f"), __classPrivateFieldGet(this, _NovaApi_apiKey, "f"));
    }
}
_NovaApi_subdomain = new WeakMap(), _NovaApi_apiKey = new WeakMap();
exports.default = NovaApi;
