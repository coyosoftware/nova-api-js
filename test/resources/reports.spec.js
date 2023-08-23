import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import mockAxios from 'jest-mock-axios';
import Reports from '../../src/resources/reports';

afterEach(() => {
  mockAxios.reset();
});

describe("Reports", () => {
  const SUBDOMAIN = 'foobar';

  describe("#cashFlow", () => {
    const API_KEY = 'abc123';
    const COMPANY_IDS = [1, 2];
    const INITIAL_DATE = new Date();
    const FINAL_DATE = new Date();

    beforeEach(() => {
      INITIAL_DATE.setDate(INITIAL_DATE.getDate() - 365);
    });

    it('issues an authenticated get to the reports cash flow endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Reports(SUBDOMAIN, API_KEY);
      const initialDate = INITIAL_DATE.toISOString();
      const finalDate = FINAL_DATE.toISOString();

      const params = new URLSearchParams({ 'initial_date': initialDate, 'final_date': finalDate });

      COMPANY_IDS.forEach(id => params.append('company_ids[]', id));

      api.cashFlow(COMPANY_IDS, initialDate, finalDate).then(thenFn).catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/cash_flow`, { headers: { "Api-Token": API_KEY }, params: params });
    });
  });

  describe("#general", () => {
    const API_KEY = 'abc123';
    const COMPANY_IDS = [1, 2];
    const INITIAL_DATE = new Date();
    const FINAL_DATE = new Date();

    beforeEach(() => {
      INITIAL_DATE.setDate(INITIAL_DATE.getDate() - 365);
    });

    it('issues an authenticated get to the reports general endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Reports(SUBDOMAIN, API_KEY);
      const initialDate = INITIAL_DATE.toISOString();
      const finalDate = FINAL_DATE.toISOString();

      const params = new URLSearchParams({ 'initial_date': initialDate, 'final_date': finalDate });

      COMPANY_IDS.forEach(id => params.append('company_ids[]', id));

      api.general(COMPANY_IDS, initialDate, finalDate).then(thenFn).catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/general`, { headers: { "Api-Token": API_KEY }, params: params });
    });
  });
});