import React from "react";
import Login from '../Login';
import { shallow } from "enzyme";

describe('Login component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<Login
    user={{id:'vafahiuweh'}}
    getBrewery={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
