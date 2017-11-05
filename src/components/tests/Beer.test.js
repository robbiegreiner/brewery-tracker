import React from "react";
import Beer from '../Beer';
import { shallow } from "enzyme";

describe.skip('Beer component', () => {
  const mockFn = jest.fn();
  let wrapper = shallow(<Beer />);


  it('should match snapshot', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });


});
