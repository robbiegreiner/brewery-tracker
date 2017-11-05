import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import FavoritesContainer from '../FavoritesContainer';
import Favorites from '../../components/Favorites';
import thunk from 'redux-thunk';
import * as actions from '../../actions/actions';
import mockBeersData from '../../mockData/mockBeersData'
import mockBreweriesData from '../../mockData/mockBreweriesData'

describe('FavoritesContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const initialState = {
    user: {},
    favorites: {},
    favoriteBeers: [],
    favoriteBreweries: []
  };
  const mockGetFavoriteBeers = jest.fn();
  const mockGetFavoriteBreweries = jest.fn();
  const mockSetCurrentBeer = jest.fn();
  const mockGetBrewery = jest.fn();
  const mockRemoveFavoriteBeer = jest.fn();
  const mockRemoveFavoriteBrewery = jest.fn();
  const store= mockStore(initialState, middlewares);
  const context = createRouterContext();

  FavoritesContainer.contextTypes = {
    router: PropTypes.object
  };

  actions.fetchFavoriteBeers = () => ({type: 'FAV_BEER_SUCCESS'});
  actions.fetchFavoriteBreweries = () => ({type: 'FAV_BREWERY_SUCCESS'});
  actions.setCurrentBeer = () => ({type: 'SET_CURRENT_BEER'});
  actions.fetchBrewery = () => ({type: 'BREWERY_SUCCESS'});
  actions.deleteFavoriteBeer = () => ({type: 'DELETE_FAV_BEER_SUCCESS'});
  actions.deleteFavoriteBrewery = () => ({type: 'DELETE_FAV_BREWERY_SUCCESS'});

  const wrapper = mount(<FavoritesContainer
    store={store}
    user={initialState.user}
    favorites={initialState.favorites}
    favoriteBeers={initialState.favoriteBeers}
    favoriteBreweries={initialState.favoriteBreweries}
    getFavoriteBeers={mockGetFavoriteBeers}
    getFavoriteBreweries={mockGetFavoriteBreweries}
    setCurrentBeer={mockSetCurrentBeer}
    getBrewery={mockGetBrewery}
    removeFavoriteBeer={mockRemoveFavoriteBeer}
    removeFavoriteBreweries={mockRemoveFavoriteBrewery}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
    expect(wrapper.instance().props.favorites).toEqual({});
    expect(wrapper.instance().props.favoriteBreweries).toEqual([]);
    expect(wrapper.instance().props.favoriteBeers).toEqual([]);
  });

  it('should unfavorite a favorite action', () => {
    Favorites.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Favorites
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      favorites={{ xcyd: { id: 'oeGSxs', type: 'beer'} }}
      favoriteBeers={mockBeersData.data}
      favoriteBreweries={mockBreweriesData.data}
      getFavoriteBeers={mockGetFavoriteBeers}
      getFavoriteBreweries={mockGetFavoriteBreweries}
      setCurrentBeer={mockSetCurrentBeer}
      getBrewery={mockGetBrewery}
      removeFavoriteBeer={mockRemoveFavoriteBeer}
      removeFavoriteBreweries={mockRemoveFavoriteBrewery}/>, { context });

    const unfavoriteBtn = altWrapper.find('.unfavorite').first();
    unfavoriteBtn.simulate('click');
    expect(mockRemoveFavoriteBeer).toHaveBeenCalledTimes(1);
  });

  it('should fetch favorite beers and fire actions', () => {
    Favorites.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Favorites
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      favorites={{ xcyd: { id: 'oeGSxs', type: 'beer'} }}
      favoriteBeers={mockBeersData.data}
      favoriteBreweries={mockBreweriesData.data}
      getFavoriteBeers={mockGetFavoriteBeers}
      getFavoriteBreweries={mockGetFavoriteBreweries}
      setCurrentBeer={mockSetCurrentBeer}
      getBrewery={mockGetBrewery}
      removeFavoriteBeer={mockRemoveFavoriteBeer}
      removeFavoriteBreweries={mockRemoveFavoriteBrewery}/>, { context });

    expect(mockGetFavoriteBeers).toHaveBeenCalledTimes(2);
  });

  it('should fetch favorite breweries and fire actions', () => {
    Favorites.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Favorites
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      favorites={{ xcyd: { id: 'oeGSxs', type: 'beer'} }}
      favoriteBeers={mockBeersData.data}
      favoriteBreweries={mockBreweriesData.data}
      getFavoriteBeers={mockGetFavoriteBeers}
      getFavoriteBreweries={mockGetFavoriteBreweries}
      setCurrentBeer={mockSetCurrentBeer}
      getBrewery={mockGetBrewery}
      removeFavoriteBeer={mockRemoveFavoriteBeer}
      removeFavoriteBreweries={mockRemoveFavoriteBrewery}/>, { context });

    expect(mockGetFavoriteBreweries).toHaveBeenCalledTimes(3);
  });

});
