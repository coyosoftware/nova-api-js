"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const SUBDOMAIN = 'public';
class Public {
    signIn(email, password) {
        return new users_1.default(SUBDOMAIN).signIn(email, password);
    }
}
exports.default = Public;
