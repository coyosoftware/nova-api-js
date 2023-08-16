import Public from "./resources/public";
import Users from "./resources/users";

class NovaApi {
  #subdomain;
  #apiKey;

  constructor(subdomain, apiKey) {
    this.#subdomain = subdomain;
    this.#apiKey = apiKey;
  }

  get public() {
    return new Public();
  }

  get users() {
    return new Users(this.#subdomain, this.#apiKey);
  }
}

module.exports = NovaApi;