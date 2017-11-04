const favorites = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {};
  case 'FAVORITE_SUCCESS':
    return action.favorites;
  case 'DELETE_FAV_SUCCESS':
    return Object.keys(state).reduce( (accu, key) => {
      if (state[key].firebaseID !== action.firebaseID){
        accu[key] = state[key];
      }
      return accu;
    }, {});
  default:
    return state;
  }
};

export default favorites;
