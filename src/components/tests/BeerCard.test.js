import React from "react";
import BeerCard from '../BeerCard';
import { shallow } from "enzyme";

describe('BeerCard component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<BeerCard
    user={{}}
    writeUserData={mockFn}
    setCurrentBeer={mockFn}
    beer={{}}
    key={'vyzgyz'}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
