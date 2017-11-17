const searchResults = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_ALL_SUCCESS':
    return action.searchResults;
  case 'ERROR_OCCURRED':
    return [];
  case 'CITY_SUCCESS':
    return action.searchResults;
  case 'ADD_FAV_BEER_SUCCESS':
    state.forEach( beer => {
      if (beer.id === action.beer.id){
        beer.isFav = true;
      }
    });
    return state;
  case 'ADD_FAV_BREWERY_SUCCESS':
    state.forEach( brewery => {
      if (brewery.id === action.brewery.id){
        brewery.isFav = true;
      }
    });
    return state;
  default:
    return state;
  }
};

export default searchResults;
