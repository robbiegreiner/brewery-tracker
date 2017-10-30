const featureBrewery = (state = {}, action) => {
  switch (action.type) {
  case 'FEATURE_SUCCESS':
    return action.features.brewery;
  default:
    return state;
  }
};

export default featureBrewery;
