const searchResults = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_ALL_SUCCESS':
    return action.searchResults;
  case 'CITY_SUCCESS':
    return action.searchResults;
  case 'ADD_FAV_BEER_SUCCESS':
    return [...state, Object.assign({isFav: true}, state.filter( beer => {
      return beer.id === action.beer.id;
    }))];
  case 'ADD_FAV_BREWERY_SUCCESS':
    state.forEach( brewery => {
      if (brewery.id === action.brewery.id){
        brewery.isFav = true;
      }
    });
    // var match = state.filter( brewery => {
    //   return brewery.id === action.brewery.id;
    // });
    // console.log(match);
    // return state;
    // Object.assign(state.filter( brewery => {
    //   return brewery.id === action.brewery.id;
    // }), {isFav: true});
    return state;
  default:
    return state;
  }
};

export default searchResults;
