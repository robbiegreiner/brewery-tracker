import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import * as actions from '../../actions/actions';
import thunk from 'redux-thunk';
import BeerContainer from '../BeerContainer';
import Beer from '../../components/Beer';

describe('BeerContainer', () => {
  const middlewaress = [thunk];
  const mockStore = configureStore();
  const initialState = {
    currentBeer: {}
  };
  const mockGetBeerByID = jest.fn();
  const store= mockStore(initialState);
  const context = createRouterContext();

  actions.fetchBeerByID = () => ({type: 'SET_CURRENT_BEER'});

  BeerContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<BeerContainer
    store={store}
    currentBeer={initialState.currentBeer}
    match={ {match: { params: { beer_id: 'vcxy7z' } } } }
    getBeerByID={mockGetBeerByID}/>, { context });

  it.skip('should have a default state', () => {
    expect(wrapper.instance().props.currentBeer).toEqual({});
  });

});
