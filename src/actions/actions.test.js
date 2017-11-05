import * as actions from './actions.js';

describe('actions', () => {
  const mockUser = { email: 'robbieg@mailg.com', id:'vxyd' };

  it('should create an action if an account creation succeeeds', () => {
    const expectedAction = {
      type: 'CREATE_ACCOUNT_SUCCESS',
      user: mockUser
    };

    expect(actions.createAccountSuccess(mockUser)).toEqual(expectedAction);
  });
});
