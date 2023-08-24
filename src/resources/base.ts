import axios, { AxiosResponse } from 'axios';

const SCHEME = 'https';
const HOST = 'nova.money';

export default class Base {
  #endpoint: string;
  #subdomain: string;
  #apiKey: string;

  constructor(subdomain: string, endpoint: string, apiKey?: string) {
    this.#subdomain = subdomain;
    this.#endpoint = endpoint;
    this.#apiKey = apiKey;
  }

  get baseUrl(): string {
    return this.#endpoint.startsWith('/') ? `${SCHEME}://${this.#subdomain}.${HOST}${this.#endpoint}` : `${SCHEME}://${this.#subdomain}.${HOST}/${this.#endpoint}`;
  }

  dateToISOString(date: Date | string): string {
    return (date instanceof Date) ? date.toISOString() : date;
  }

  doGet(path: string, params?: URLSearchParams | Object): Promise<AxiosResponse> {
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

  doPost(path: string, data: Object): Promise<AxiosResponse> {
    const url = path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;

    return axios.post(url, data);
  }
}