import React from "react";
import FeatureBrewery from '../FeatureBrewery';
import { shallow } from "enzyme";

describe('FeatureBrewery component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<FeatureBrewery
    featureBrewery={{}}
    getBrewery={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
