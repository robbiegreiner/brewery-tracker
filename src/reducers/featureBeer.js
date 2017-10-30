const featureBeer = (state = {}, action) => {
  switch (action.type) {
  case 'FEATURE_SUCCESS':
    return action.features.beer;
  default:
    return state;
  }
};

export default featureBeer;
