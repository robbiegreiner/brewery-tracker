import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import HeaderContainer from '../HeaderContainer';
import Header from '../../components/Header';

describe('HeaderContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {}
  };
  const mockLogout = jest.fn();
  const store= mockStore(initialState);
  const context = createRouterContext();

  HeaderContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<HeaderContainer
    store={store}
    user={initialState.user}
    logout={mockLogout}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
  });

  it('should fire actions', () => {
    Header.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Header
      store={store}
      user={{ email: 'robbieg@mailg.com' }}
      logout={mockLogout}/>, { context });
    const signOut = altWrapper.find('.logout').first();

    signOut.simulate('click');
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

});
