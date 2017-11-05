import * as actions from './actions.js';
import mockBeersData from '../mockData/mockBeersData';
import mockBreweriesData from '../mockData/mockBreweriesData';

describe('actions', () => {
  const mockUser = { email: 'robbieg@mailg.com', id:'vxyd' };

  it('should create an action if an account creation succeeds', () => {
    const expectedAction = {
      type: 'CREATE_ACCOUNT_SUCCESS',
      user: mockUser
    };

    expect(actions.createAccountSuccess(mockUser)).toEqual(expectedAction);
  });

  it('should create an action if an login succeeds', () => {
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      user: mockUser
    };

    expect(actions.loginSuccess(mockUser)).toEqual(expectedAction);
  });

  it('should create an action if search all succeeds', () => {
    const expectedAction = {
      type: 'SEARCH_ALL_SUCCESS',
      searchResults: mockBeersData.data,
      searchType: 'beer'
    };

    expect(actions.searchAllSuccess(mockBeersData.data, 'beer')).toEqual(expectedAction);
  });

  it('should create an action if city search succeeds', () => {
    const expectedAction = {
      type: 'CITY_SUCCESS',
      searchResults: mockBreweriesData,
      searchType: 'city'
    };

    expect(actions.citySuccess(mockBreweriesData, 'city')).toEqual(expectedAction);
  });


});
