import React from "react";
import Favorites from '../Favorites';
import { shallow } from "enzyme";

describe('Favorites component', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Favorites
    user={{}}
    favorites={{}}
    favoriteBeers={[]}
    favoriteBreweries={[]}
    getFavorites={mockFn}
    getFavoriteBeers={mockFn}
    getFavoriteBreweries={mockFn}
    setCurrentBeer={mockFn}
    removeFavoriteBeer={mockFn}
    removeFavoriteBreweries={mockFn}
    addFavoriteBeer={mockFn}
    addFavoriteBrewery={mockFn}/>);


  it('should match snapshot', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
