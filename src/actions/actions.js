import firebase, { auth, provider } from '../firebase.js';
import apikey from '../apikey.js'

export const createAccountSuccess = (user) => {
  return {
    type: 'CREATE_ACCOUNT_SUCCESS',
    user
  };
};


export const createAccount = (email, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => dispatch(createAccountSuccess(Object.assign({}, {
        id: response.uid,
        email: response.email
      }))))
      .catch(error => console.log(error))
  };
};

export const loginSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
};

export const login = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => dispatch(loginSuccess(Object.assign({}, {
        id: response.uid,
        email: response.email
      }))))
      .catch(error => console.log(error));
  };
};


export const searchAllSuccess = (searchResults, searchType) => {
  return {
    type: 'SEARCH_ALL_SUCCESS',
    searchResults, searchType
  };
};

export const fetchSearch = (searchValue, searchType) => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/search?q=${searchValue}&key=${apikey}&withBreweries=y&withLocations=y`)
      .then(response => response.json())
      .then(results => dispatch(searchAllSuccess(results.data, searchType)))
      .catch(error => console.log(error));
  };
};

export const citySuccess = (searchResults, searchType) => {
  return {
    type: 'CITY_SUCCESS',
    searchResults, searchType
  };
};

export const fetchCity = (city, state, searchType) => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/locations?key=${apikey}&locality=${city}&region=${state}&withLocations=y`)
      .then(response => response.json())
      .then(results => dispatch(citySuccess(results.data, searchType)))
      .catch(error => console.log(error));
  };
};

export const fetchBrewerySuccess = brewery => {
  return {
    type: 'BREWERY_SUCCESS',
    brewery
  };
};

export const fetchBrewery = id => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/brewery/${id}?key=${apikey}`)
      .then(response => response.json())
      .then(results => dispatch(fetchBrewerySuccess(results.data)))
      .catch(error => console.log(error));
  };
};

export const fetchBreweryBeerSuccess = beers => {
  return {
    type: 'BREWERY_BEER_SUCCESS',
    beers
  };
};

export const fetchBreweryBeers = id => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/brewery/${id}/beers?key=${apikey}&withBreweries=y`)
      .then(response => response.json())
      .then(results => dispatch(fetchBreweryBeerSuccess(results.data)))
      .catch(error => console.log(error));
  };
};


export const setCurrentBeer = beer => {
  return {
    type: 'SET_CURRENT_BEER',
    beer
  };
};

export const fetchBeerByID = id => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/beer/${id}?key=c138c8eb0b70d77459a4c1f2f479533a&withBreweries=y`)
      .then(response => response.json())
      .then(results => dispatch(setCurrentBeer(results.data)))
      .catch(error => console.log(error));
  };
};



export const featureSuccess = features => {
  return {
    type: 'FEATURE_SUCCESS',
    features
  };
};

export const fetchFeatures = () => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/featured/?key=${apikey}`)
      .then(response => response.json())
      .then(results => dispatch(featureSuccess(results.data)))
      .catch(error => console.log(error));
  };
};
