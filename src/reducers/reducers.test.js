import brewery from './brewery';
import breweryBeers from './breweryBeers';
import currentBeer from './currentBeer';
import favorites from './favorites';
import featureBeer from './featureBeer';
import featureBrewery from './featureBrewery';
import searchResults from './searchResults';
import searchType from './searchType';
import user from './user';
import mockBreweryData from '../mockData/mockBreweryData';
import mockBreweryBeers from '../mockData/mockBreweryBeers';
import mockBeerData from '../mockData/mockBeerData';
import mockFeaturesData from '../mockData/mockFeaturesData';
import mockSearchData from '../mockData/mockSearchData';

describe('brewery reducer', () => {
  it('should have a default state', () => {
    expect(brewery(undefined, {})).toEqual({});
  });

  it('should give a brewery when passed info', () => {
    const mockData = mockBreweryData;
    const action = { type: 'BREWERY_SUCCESS', brewery: mockData.data };

    expect(brewery(undefined, action)).toEqual(mockData.data);
  });
});

describe('breweryBeers reducer', () => {
  it('should have a default state', () => {
    expect(breweryBeers(undefined, [])).toEqual([]);
  });

  it('should give all breweries beers', () => {
    const action = { type: 'BREWERY_SUCCESS', brewery: mockBreweryBeers.data };

    expect(brewery(undefined, action)).toEqual(mockBreweryBeers.data);
  });
});

describe('currentBeer reducer', () => {
  it('should have a default state', () => {
    expect(currentBeer(undefined, {})).toEqual({});
  });

  it('should give a beer', () => {
    const action = { type: 'SET_CURRENT_BEER', beer: mockBeerData };

    expect(currentBeer(undefined, action)).toEqual(mockBeerData);
  });
});

describe('featureBeer reducer', () => {
  it('should have a default state', () => {
    expect(featureBeer(undefined, {})).toEqual({});
  });

  it.skip('should give a beer', () => {
    const action = { type: 'FEATURE_SUCCESS', features: mockFeaturesData.data };

    expect(featureBeer(undefined, action)).toEqual(mockFeaturesData.data.beer);
  });
});

describe('featureBrewery reducer', () => {
  it('should have a default state', () => {
    expect(featureBrewery(undefined, {})).toEqual({});
  });

  it('should give a brewery', () => {
    const action = { type: 'FEATURE_SUCCESS', features: mockFeaturesData.data };

    expect(featureBrewery(undefined, action)).toEqual(mockFeaturesData.data.brewery);
  });
});

describe('searchResults reducer', () => {
  it('should have a default state', () => {
    expect(searchResults(undefined, [])).toEqual([]);
  });

  it('should give search results', () => {
    const action = { type: 'SEARCH_ALL_SUCCESS', searchResults: mockSearchData.data };

    expect(searchResults(undefined, action)).toEqual(mockSearchData.data);
  });
});

describe('user reducer', () => {
  const userMockData = {
    id: "awiefajf",
    email: "robbieg@mailg.com"
  };

  it('should have a default state', () => {
    expect(user(undefined, {})).toEqual({});
  });

  it('should give user', () => {
    const action = { type: 'LOGIN_SUCCESS', user: userMockData };

    expect(user(undefined, action)).toEqual(userMockData);
  });
});
