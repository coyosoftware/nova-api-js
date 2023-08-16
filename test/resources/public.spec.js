import { describe, expect, it, jest } from '@jest/globals';

import Public from '../../src/resources/public';
import Users from '../../src/resources/users';

jest.mock('../../src/resources/users');

beforeEach(() => {
  Users.mockClear();
});

describe("Public", () => {
  describe("#signIn", () => {
    const EMAIL = 'email@example.com';
    const PASSWORD = 'password';

    it('calls the users sign in method with the public tenant', () => {
      const api = new Public();

      api.signIn(EMAIL, PASSWORD);

      expect(Users).toHaveBeenCalledWith('public');

      const mockUsersInstance = Users.mock.instances[0];
      const mockUserSignIn = mockUsersInstance.signIn;

      expect(mockUserSignIn).toHaveBeenCalledWith(EMAIL, PASSWORD);
    });
  });
});