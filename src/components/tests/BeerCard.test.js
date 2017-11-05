import React from "react";
import BeerCard from '../BeerCard';
import { shallow } from "enzyme";

describe.skip('BeerCard component', () => {
  const mockFn = jest.fn();

  const match = {
    isExact: true,
    params: {
      name: 'the-topic-name'
    },
    path: '/topics/:name',
    url: '/topics/the-topic-name'
};

  const wrapper = shallow(<BeerCard
    user={{}}
    writeUserData={mockFn}
    setCurrentBeer={mockFn}
    beer={{}}
    match={{  params: { beer_id: 'vcxy7z' }  }}
    key={'vyzgyz'}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
