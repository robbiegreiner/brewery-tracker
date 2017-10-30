const searchType = (state = '', action) => {
  switch (action.type) {
  case 'SEARCH_ALL_SUCCESS':
    return action.searchType;
  case 'CITY_SUCCESS':
    return action.searchType;
  default:
    return state;
  }
};

export default searchType;
