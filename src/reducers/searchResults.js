const searchResults = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_ALL_SUCCESS':
    return action.searchResults;
  default:
    return state;
  }
};

export default searchResults;
