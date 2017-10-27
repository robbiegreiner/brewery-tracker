const randomBrewery = (state = {}, action) => {
  switch (action.type) {
  case 'RANDOM_BREWERY_SUCCESS':
    return action.brewery;
  default:
    return state;
  }
};

export default randomBrewery;
