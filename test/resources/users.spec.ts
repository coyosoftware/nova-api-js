import { afterEach, describe, expect, it, jest } from '@jest/globals';
import mockAxios from 'jest-mock-axios';
import Users from '../../src/resources/users';

afterEach(() => {
  mockAxios.reset();
});

describe("Users", () => {
  const SUBDOMAIN = 'foobar';

  describe("#signIn", () => {
    const EMAIL = 'email@example.com';
    const PASSWORD = 'password';

    it('issues a post to the users sign in endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Users(SUBDOMAIN);

      api.signIn(EMAIL, PASSWORD).then(thenFn).catch(catchFn);;

      expect(mockAxios.post).toHaveBeenCalledWith(`${api.baseUrl}/sign_in`, { email: EMAIL, password: PASSWORD });
    });
  });

  describe("#subdomains", () => {
    const API_KEY = 'abc123';

    it('issues an authenticated get to the users subdomains endpoint', () => {
      let catchFn = jest.fn();
      let thenFn = jest.fn();

      const api = new Users(SUBDOMAIN, API_KEY);

      api.subdomains().then(thenFn).catch(catchFn);;

      expect(mockAxios.get).toHaveBeenCalledWith(`${api.baseUrl}/subdomains`, { headers: { "Api-Token": API_KEY } });
    });
  });
});