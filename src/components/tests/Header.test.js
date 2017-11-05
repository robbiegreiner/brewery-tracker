import React from "react";
import Header from '../Header';
import { shallow } from "enzyme";

describe('Header component', () => {
  let wrapper;


  it('should match snapshot', () => {
    wrapper = shallow(<Header
      user={{email: 'robbieg@mailg.com'}}/>);
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });


});
