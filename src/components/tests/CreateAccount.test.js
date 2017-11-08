import React from "react";
import CreateAccount from '../CreateAccount';
import { shallow } from "enzyme";

describe('CreateAccount component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<CreateAccount
    user={{}}
    errorMessage={''}
    createAccount={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty default state', () => {
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should render two inputs', () => {
    const inputs = wrapper.find('input');

    expect(inputs.length).toEqual(2);
  });

  it('should change state on input', () => {
    const emailInput = wrapper.find('.email-input');
    const passwordInput = wrapper.find('.password-input');

    emailInput.simulate('change', { target: { value: 'robbie@gmail.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().email).toEqual('robbie@gmail.com');
    expect(wrapper.state().password).toEqual('password');
  });

  it('should run function on submit', () => {
    const button = wrapper.find('button').first();

    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });


});
