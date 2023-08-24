"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const ENDPOINT = 'api/users';
class Users extends base_1.default {
    constructor(subdomain, apiKey) {
        super(subdomain, ENDPOINT, apiKey);
    }
    signIn(email, password) {
        return this.doPost('sign_in', { email, password });
    }
    subdomains() {
        return this.doGet('subdomains');
    }
}
exports.default = Users;
