import NovaApi from '../src/index';

import Companies from '../src/resources/companies';
import Public from '../src/resources/public';
import Reports from '../src/resources/reports';
import Users from '../src/resources/users';

describe("NovaApi", () => {
  const SUBDOMAIN = 'foobar';

  it('returns the companies class', () => {
    expect(new NovaApi(SUBDOMAIN).companies).toBeInstanceOf(Companies);
  });

  it('returns the public class', () => {
    expect(new NovaApi(SUBDOMAIN).public).toBeInstanceOf(Public);
  });

  it('returns the reports class', () => {
    expect(new NovaApi(SUBDOMAIN).reports).toBeInstanceOf(Reports);
  });

  it('returns the users class', () => {
    expect(new NovaApi(SUBDOMAIN).users).toBeInstanceOf(Users);
  });
});