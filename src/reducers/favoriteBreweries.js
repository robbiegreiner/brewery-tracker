const favoriteBreweries = (state = [], action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return [];
  case 'FAV_BREWERY_SUCCESS':
    return action.favBeerData;
  case 'DELETE_FAV_SUCCESS':
    return state.filter( brewery => {
      return brewery.firebaseID !== action.firebaseID;
    });
  default:
    return state;
  }
};

export default favoriteBreweries;
