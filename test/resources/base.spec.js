import { describe, expect, it, jest } from '@jest/globals';
import mockAxios from 'jest-mock-axios';
import Base from '../../src/resources/base';

afterEach(() => {
  mockAxios.reset();
});

describe("Base", () => {
  const ENDPOINT = 'foo';
  const SUBDOMAIN = 'foobar';

  describe("#baseUrl", () => {
    describe('when no endpoint is informed', () => {
      it('throws an error', () => {
        expect(() => {
          new Base(SUBDOMAIN, null).baseUrl
        }).toThrowError(/The endpoint must be informed/);
      });
    });

    describe('when no subdomain is informed', () => {
      it('throws an error', () => {
        expect(() => {
          new Base(null, ENDPOINT).baseUrl
        }).toThrowError(/The subdomain must be informed/);
      });
    });

    describe('when both endpoint and subdomain are informed', () => {
      it('returns the base url', () => {
        expect(new Base(SUBDOMAIN, ENDPOINT).baseUrl).toEqual(`https://${SUBDOMAIN}.nova.money/${ENDPOINT}`);
      });
    });
  });

  describe('#doGet', () => {
    describe("when there is no api key configured", () => {
      it('issues a get request to the specified path', () => {
        let catchFn = jest.fn();
        let thenFn = jest.fn();
  
        const base = new Base(SUBDOMAIN, ENDPOINT);
  
        base.doGet('foo').then(thenFn).catch(catchFn);;
  
        expect(mockAxios.get).toHaveBeenCalledWith(`${base.baseUrl}/foo`, {});
      });  
    });

    describe("when there is an api key configured", () => {
      const API_KEY = 'abc123';

      it('issues an authenticated get request to the specified path', () => {
        let catchFn = jest.fn();
        let thenFn = jest.fn();
  
        const base = new Base(SUBDOMAIN, ENDPOINT, API_KEY);
  
        base.doGet('foo').then(thenFn).catch(catchFn);;
  
        expect(mockAxios.get).toHaveBeenCalledWith(`${base.baseUrl}/foo`, { headers: { "Api-Token": API_KEY } });
      });  
    });
  });

  describe('#doPost', () => {
    const DATA = { bar: 'baz' };

    it('issues a POST request to the specified path with the given data', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const base = new Base(SUBDOMAIN, ENDPOINT);

      base.doPost('foo', DATA).then(thenFn).catch(catchFn);;

      expect(mockAxios.post).toHaveBeenCalledWith(`${base.baseUrl}/foo`, DATA);
    });
  });
});