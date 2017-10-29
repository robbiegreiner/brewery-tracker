const breweryBeers = (state = [], action) => {
  switch (action.type) {
  case 'BREWERY_BEER_SUCCESS':
    return action.beers;
  default:
    return state;
  }
};

export default breweryBeers;
