import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import * as actions from '../../actions/actions';
import thunk from 'redux-thunk';
import BreweryContainer from '../BreweryContainer';
import Brewery from '../../components/Brewery';

describe.skip('BreweryContainer', () => {
  const middlewaress = [thunk];
  const mockStore = configureStore();
  const initialState = {
    currentBrewery: {}
  };
  const mockGetBreweryByID = jest.fn();
  const store= mockStore(initialState);
  const context = createRouterContext();

  actions.fetchBreweryByID = () => ({type: 'SET_CURRENT_BEER'});

  BreweryContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<BreweryContainer
    store={store}
    currentBrewery={initialState.currentBrewery}
    match={ {match: { params: { beer_id: 'vcxy7z' } } } }
    getBreweryByID={mockGetBreweryByID}/>, { context });

  it.skip('should have a default state', () => {
    expect(wrapper.instance().props.currentBrewery).toEqual({});
  });

});
