import React from "react";
import SearchResults from '../SearchResults';
import { shallow } from "enzyme";

describe('SearchResults component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<SearchResults
    user={{}}
    setCurrentBeer={mockFn}
    getBrewery={mockFn}
    searchType={'beer'}
    searchResults={[{}, {}]}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
