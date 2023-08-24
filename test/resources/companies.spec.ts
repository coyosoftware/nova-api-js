import { afterEach, describe, expect, it, jest } from '@jest/globals';
import mockAxios from 'jest-mock-axios';
import Companies from '../../src/resources/companies';

afterEach(() => {
  mockAxios.reset();
});

describe("Companies", () => {
  const SUBDOMAIN = 'foobar';

  describe("#attachments", () => {
    const API_KEY = 'abc123';
    const COMPANY_IDS = [1, 2];

    it('issues an authenticated get to the companies attachments endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Companies(SUBDOMAIN, API_KEY);

      const params = new URLSearchParams();

      COMPANY_IDS.forEach(id => params.append('company_ids[]', String(id)));

      api.attachments(COMPANY_IDS).then(thenFn).catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/attachments`, { headers: { "Api-Token": API_KEY }, params: params });
    });
  });

  describe("#list", () => {
    const API_KEY = 'abc123';

    it('issues an authenticated get to the companies index endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Companies(SUBDOMAIN, API_KEY);

      api.list().then(thenFn).catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/`, { headers: { "Api-Token": API_KEY } });
    });
  });

  describe("#statement", () => {
    const API_KEY = 'abc123';
    const COMPANY_IDS = [1, 2];
    const DATE = new Date().toISOString();

    it('issues an authenticated get to the companies statement endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Companies(SUBDOMAIN, API_KEY);

      const params = new URLSearchParams({ 'date': DATE });

      COMPANY_IDS.forEach(id => params.append('company_ids[]', String(id)));

      api.statement(COMPANY_IDS, DATE).then(thenFn).catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/statement`, { headers: { "Api-Token": API_KEY }, params: params });
    });
  });
});