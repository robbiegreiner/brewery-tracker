import React from "react";
import FeatureBeer from '../FeatureBeer';
import { shallow } from "enzyme";

describe('FeatureBeer component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<FeatureBeer
    featureBeer={{}}
    getBrewery={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
