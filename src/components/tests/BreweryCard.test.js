import React from "react";
import BreweryCard from '../BreweryCard';
import { shallow } from "enzyme";

describe('BreweryCard component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<BreweryCard
    user={{}}
    writeUserData={mockFn}
    getBrewery={mockFn}
    brewery={{}}
    key={'vxySde'}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
