import React from "react";
import CityCard from '../CityCard';
import { shallow } from "enzyme";

describe('CityCard component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<CityCard
    user={{}}
    writeUserData={mockFn}
    getBrewery={mockFn}
    brewery={{}}
    key={'vxySde'}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
