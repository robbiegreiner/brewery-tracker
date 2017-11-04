const favoriteBeers = (state = [], action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return [];
  case 'FAV_BEER_SUCCESS':
    return action.favBeerData;
  case 'DELETE_FAV_BEER_SUCCESS':
    return state.filter( beer => {
      return beer.firebaseID !== action.firebaseID;
    });
  default:
    return state;
  }
};

export default favoriteBeers;
