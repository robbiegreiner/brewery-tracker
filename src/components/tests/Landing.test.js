import React from "react";
import Landing from '../Landing';
import { shallow } from "enzyme";

describe('Landing component', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Landing
    featureBrewery={{}}
    featureBeer={{}}
    searchAll={mockFn}
    searchCity={mockFn}
    getFeatures={mockFn}
    getBrewery={mockFn}/>);


  it('should match snapshot', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
