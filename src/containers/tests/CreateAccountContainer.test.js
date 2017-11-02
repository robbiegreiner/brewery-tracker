import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import CreateAccountContainer from '../CreateAccountContainer';
import CreateAccount from '../../components/CreateAccount';

describe('CreateAccountContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {}
  };
  const mockCreateAccount = jest.fn();
  const store= mockStore(initialState);
  const context = createRouterContext();

  CreateAccountContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<CreateAccountContainer
    store={store}
    user={initialState.user}
    createAccount={mockCreateAccount}/>, { context });

  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
  });

  it('should fire actions', () => {
    CreateAccount.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<CreateAccount
      store={store}
      user={initialState.user}
      createAccount={mockCreateAccount}/>, { context });
    const createUser = altWrapper.find('.create-btn').first();

    createUser.simulate('click');
    expect(mockCreateAccount).toHaveBeenCalledTimes(1);
  });
});
