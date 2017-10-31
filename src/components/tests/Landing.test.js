import React from "react";
import Landing from '../Landing';
import { shallow } from "enzyme";

describe('Landing component', () => {
  let wrapper;


  it('should match snapshot', () => {
    wrapper = shallow(<Landing />);
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });


});
