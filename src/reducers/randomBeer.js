const randomBeer = (state = {}, action) => {
  switch (action.type) {
  case 'RANDOM_SUCCESS':
    return action.randoms.beer;
  default:
    return state;
  }
};

export default randomBeer;
