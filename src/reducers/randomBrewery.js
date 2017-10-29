const randomBrewery = (state = {}, action) => {
  switch (action.type) {
  case 'RANDOM_SUCCESS':
    return action.randoms.brewery;
  default:
    return state;
  }
};

export default randomBrewery;
