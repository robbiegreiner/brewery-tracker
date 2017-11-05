import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import LandingContainer from '../LandingContainer';
import Landing from '../../components/Landing';
import thunk from 'redux-thunk';
import * as actions from '../../actions/actions';
import mockFeaturesData from '../../mockData/mockFeaturesData'

describe('LandingContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const initialState = {
    user: {},
    featureBeer: {},
    featureBrewery: {}
  };
  const mockSearchAll = jest.fn();
  const mockSearchCity = jest.fn();
  const mockSetCurrentBeer = jest.fn();
  const mockGetBrewery = jest.fn();
  const mockGetFeatures = jest.fn();
  const mockGetFavorites = jest.fn();
  const store= mockStore(initialState, middlewares);
  const context = createRouterContext();

  LandingContainer.contextTypes = {
    router: PropTypes.object
  };

  actions.setCurrentBeer = () => ({type: 'SET_CURRENT_BEER'});
  actions.fetchBrewery = () => ({type: 'BREWERY_SUCCESS'});
  actions.fetchSearch = () => ({type: 'SEARCH_ALL_SUCCESS'});
  actions.fetchCity = () => ({type: 'CITY_SUCCESS'});
  actions.fetchFeatures = () => ({type: 'FEATURE_SUCCESS'});
  actions.fetchFavorites = () => ({type: 'FAVORITE_SUCCESS'});


  const wrapper = mount(<LandingContainer
    store={store}
    user={initialState.user}
    featureBrewery={initialState.featureBrewery}
    featureBeer={initialState.featureBeer}
    searchAll={mockSearchAll}
    searchCity={mockSearchCity}
    getFeatures={mockGetFeatures}
    getFavorites={mockGetFavorites}
    getBrewery={mockGetBrewery}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
    expect(wrapper.instance().props.featureBeer).toEqual({});
    expect(wrapper.instance().props.featureBrewery).toEqual({});
  });

  it('gets favorites and fires action', () => {
    Landing.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Landing
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      featureBrewery={mockFeaturesData.data.brewery}
      featureBeer={mockFeaturesData.data.beer}
      searchAll={mockSearchAll}
      searchCity={mockSearchCity}
      getFeatures={mockGetFeatures}
      getFavorites={mockGetFavorites}
      getBrewery={mockGetBrewery}/>, { context });

    expect(mockGetFavorites).toHaveBeenCalledTimes(1);
  });

  it('gets features and fires action', () => {
    Landing.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Landing
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      featureBrewery={mockFeaturesData.data.brewery}
      featureBeer={mockFeaturesData.data.beer}
      searchAll={mockSearchAll}
      searchCity={mockSearchCity}
      getFeatures={mockGetFeatures}
      getFavorites={mockGetFavorites}
      getBrewery={mockGetBrewery}/>, { context });

    expect(mockGetFeatures).toHaveBeenCalledTimes(2);
  });

  it('search fires action', () => {
    Landing.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Landing
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      featureBrewery={mockFeaturesData.data.brewery}
      featureBeer={mockFeaturesData.data.beer}
      searchAll={mockSearchAll}
      searchCity={mockSearchCity}
      getFeatures={mockGetFeatures}
      getFavorites={mockGetFavorites}
      getBrewery={mockGetBrewery}/>, { context });

    const searchButton = altWrapper.find('button').first();
    searchButton.simulate('click');
    expect(mockSearchAll).toHaveBeenCalledTimes(1);
  });

});
