import Companies from "./resources/companies";
import Public from "./resources/public";
import Reports from "./resources/reports";
import Users from "./resources/users";

class NovaApi {
  #subdomain;
  #apiKey;

  constructor(subdomain?: string, apiKey?: string) {
    this.#subdomain = subdomain;
    this.#apiKey = apiKey;
  }

  get companies() {
    return new Companies(this.#subdomain, this.#apiKey);
  }

  get public() {
    return new Public();
  }

  get reports() {
    return new Reports(this.#subdomain, this.#apiKey);
  }

  get users() {
    return new Users(this.#subdomain, this.#apiKey);
  }
}

export default NovaApi;