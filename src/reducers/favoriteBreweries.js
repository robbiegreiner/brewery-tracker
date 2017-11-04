const favoriteBreweries = (state = [], action) => {
  switch (action.type) {
  case 'FAV_BREWERY_SUCCESS':
    return action.favBeerData;
  default:
    return state;
  }
};

export default favoriteBreweries;
