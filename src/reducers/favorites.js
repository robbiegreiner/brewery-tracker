const favorites = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {};
  case 'FAVORITE_SUCCESS':
    return action.favorites;
  default:
    return state;
  }
};

export default favorites;
