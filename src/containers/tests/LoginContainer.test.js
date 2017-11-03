import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import LoginContainer from '../LoginContainer';
import Login from '../../components/Login';

describe('LoginContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {}
  };
  const mockLogin = jest.fn();
  const store= mockStore(initialState);
  const context = createRouterContext();

  LoginContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<LoginContainer
    store={store}
    user={initialState.user}
    login={mockLogin}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
  });

  it('should fire actions', () => {
    Login.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Login
      store={store}
      user={initialState.user}
      login={mockLogin}/>, { context });
    const createUser = altWrapper.find('.login-btn').first();

    createUser.simulate('click');
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
});
