import NovaApi from '../src/index';

import Public from '../src/resources/public';
import Users from '../src/resources/users';

describe("NovaApi", () => {
  const SUBDOMAIN = 'foobar';

  it('returns the public class', () => {
    expect(new NovaApi(SUBDOMAIN).public).toBeInstanceOf(Public);
  });

  it('returns the users class', () => {
    expect(new NovaApi(SUBDOMAIN).users).toBeInstanceOf(Users);
  });
});