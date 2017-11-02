import React from "react";
import CreateAccount from '../CreateAccount';
import { shallow } from "enzyme";

describe('CreateAccount component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<CreateAccount
    user={{}}
    createAccount={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
