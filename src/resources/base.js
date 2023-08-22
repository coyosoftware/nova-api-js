const SCHEME = 'https';
const HOST = 'nova.money';

import axios from 'axios';

export default class Base {
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

  doGet(path, params) {
    const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;

    let config = {};

    if (this.#apiKey) {
      config['headers'] = { 'Api-Token': this.#apiKey }
    }

    if (params) {
      config['params'] = params
    }

    return axios.get(url, config);
  }

  doPost(path, data) {
    const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;

    return axios.post(url, data);
  }
}