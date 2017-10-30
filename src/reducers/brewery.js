const brewery = (state = {}, action) => {
  switch (action.type) {
  case 'BREWERY_SUCCESS':
    return action.brewery;
  default:
    return state;
  }
};

export default brewery;
