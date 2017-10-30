const currentBeer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_CURRENT_BEER':
    return action.beer;
  default:
    return state;
  }
};

export default currentBeer;
