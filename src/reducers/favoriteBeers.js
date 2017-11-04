const favoriteBeers = (state = [], action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return [];
  case 'FAV_BEER_SUCCESS':
    return action.favBeerData;
  default:
    return state;
  }
};

export default favoriteBeers;
