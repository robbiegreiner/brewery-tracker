const currentBeer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_CURRENT_BEER':
    return action.beer;
  case 'ADD_FAV_BEER_SUCCESS':
    if (state.id === action.beer.id){
      state.isFav = true;
    }
    return state;
  default:
    return state;
  }
};

export default currentBeer;
