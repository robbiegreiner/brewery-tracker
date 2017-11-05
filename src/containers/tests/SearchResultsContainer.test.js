import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import SearchResultsContainer from '../SearchResultsContainer';
import SearchResults from '../../components/SearchResults';
import thunk from 'redux-thunk';
import * as actions from '../../actions/actions';
import mockBeersData from '../../mockData/mockBeersData'

describe('SearchResultsContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const initialState = {
    user: {},
    searchType: '',
    searchResults: [],
    favorites: {}
  };

  const mockSetCurrentBeer = jest.fn();
  const mockGetBrewery = jest.fn();
  const mockAddFavoriteBeer = jest.fn();
  const mockAddFavoriteBrewery = jest.fn();
  const store= mockStore(initialState, middlewares);
  const context = createRouterContext();

  SearchResultsContainer.contextTypes = {
    router: PropTypes.object
  };

  actions.setCurrentBeer = () => ({type: 'SET_CURRENT_BEER'});
  actions.fetchBrewery = () => ({type: 'BREWERY_SUCCESS'});
  actions.addFavoriteBeer = () => ({type: 'ADD_FAV_BEER_SUCCESS'});
  actions.addFavoriteBrewery = () => ({type: 'ADD_FAV_BREWERY_SUCCESS'});


  const wrapper = mount(<SearchResultsContainer
    store={store}
    user={initialState.user}
    searchType={initialState.searchType}
    searchResults={initialState.searchResults}
    favorites={initialState.favorites}
    setCurrentBeer={mockSetCurrentBeer}
    addFavoriteBrewery={mockAddFavoriteBrewery}
    addFavoriteBeer={mockAddFavoriteBeer}
    getBrewery={mockGetBrewery}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
    expect(wrapper.instance().props.favorites).toEqual({});
    expect(wrapper.instance().props.searchResults).toEqual([]);
    expect(wrapper.instance().props.searchType).toEqual('');
  });

  it('should fire actions', () => {
    SearchResults.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<SearchResults
      store={store}
      user={{ email: 'robbieg@mailg.com', id:'vxyd' }}
      searchType={'beer'}
      searchResults={mockBeersData.data}
      favorites={{ xcyd: { id: 'oeGSxs', type: 'beer'} }}
      setCurrentBeer={mockSetCurrentBeer}
      addFavoriteBrewery={mockAddFavoriteBrewery}
      addFavoriteBeer={mockAddFavoriteBeer}
      getBrewery={mockGetBrewery}/>, { context });

    // console.log(altWrapper.debug());
    const favoriteButton = altWrapper.find('.favorite').first();
    favoriteButton.simulate('click');
    expect(mockAddFavoriteBeer).toHaveBeenCalledTimes(1);
  });

});
