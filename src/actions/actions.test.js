import * as actions from './actions.js';
import mockBeersData from '../mockData/mockBeersData';
import mockBeerData from '../mockData/mockBeerData';
import mockBreweriesData from '../mockData/mockBreweriesData';
import mockBreweryData from '../mockData/mockBreweryData';
import mockBreweryBeers from '../mockData/mockBreweryBeers';
import mockFeaturesData from '../mockData/mockFeaturesData';

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

  it('should create an action if fetch brewerys beers succeeds', () => {
    const expectedAction = {
      type: 'BREWERY_BEER_SUCCESS',
      beers: mockBreweryBeers.data
    };

    expect(actions.fetchBreweryBeerSuccess(mockBreweryBeers.data)).toEqual(expectedAction);
  });

  it('should create an action if fetch beer by ID succeeds', () => {
    const expectedAction = {
      type: 'SET_CURRENT_BEER',
      beer: mockBeerData
    };

    expect(actions.setCurrentBeer(mockBeerData)).toEqual(expectedAction);
  });

  it('should create an action if fetch features succeeds', () => {
    const expectedAction = {
      type: 'FEATURE_SUCCESS',
      features: mockFeaturesData
    };

    expect(actions.featureSuccess(mockFeaturesData)).toEqual(expectedAction);
  });

  it('should create an action if fetch favorite ids succeeds', () => {
    const expectedAction = {
      type: 'FAVORITE_SUCCESS',
      favorites: mockBeersData.data
    };

    expect(actions.favoriteSuccess(mockBeersData.data)).toEqual(expectedAction);
  });

  it('should create an action if fetch favorite beers succeeds', () => {
    const expectedAction = {
      type: 'FAV_BEER_SUCCESS',
      favBeerData: mockBeersData.data
    };

    expect(actions.favBeerSuccess(mockBeersData.data)).toEqual(expectedAction);
  });

  it('should create an action if fetch favorite breweries succeeds', () => {
    const expectedAction = {
      type: 'FAV_BREWERY_SUCCESS',
      favBeerData: mockBeersData.data
    };

    expect(actions.favBrewerySuccess(mockBeersData.data)).toEqual(expectedAction);
  });

  it('should create an action if a beer is removed from favorites succeeds', () => {
    const expectedAction = {
      type: 'DELETE_FAV_BEER_SUCCESS',
      firebaseID: '123456'
    };

    expect(actions.deleteFavoriteBeerSuccess('123456')).toEqual(expectedAction);
  });

  it('should create an action if a beer is added to favorites succeeds', () => {
    const expectedAction = {
      type: 'ADD_FAV_BEER_SUCCESS',
      beer: mockBeerData
    };

    expect(actions.addFavoriteBeerSuccess(mockBeerData)).toEqual(expectedAction);
  });

  it('should create an action if a brewery is added to favorites succeeds', () => {
    const expectedAction = {
      type: 'ADD_FAV_BREWERY_SUCCESS',
      brewery: mockBreweryData.data
    };

    expect(actions.addFavoriteBrewerySuccess(mockBreweryData.data)).toEqual(expectedAction);
  });


});
