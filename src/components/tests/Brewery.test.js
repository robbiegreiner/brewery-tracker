import React from "react";
import Brewery from '../Brewery';
import { shallow } from "enzyme";

describe.skip('BeerCard component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<Brewery
    brewery={{}}
    getBreweryBeers={mockFn}
    setCurrentBeer={mockFn}
    breweryBeers={[]}
    getBrewery={mockFn}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
