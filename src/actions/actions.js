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


export const searchAllSuccess = searchResults => {
  return {
    type: 'SEARCH_ALL_SUCCESS',
    searchResults
  };
};

export const fetchSearch = searchValue => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/search?q=${searchValue}&key=${apikey}&withBreweries=y&withDescription=y`)
      .then(response => response.json())
      .then(results => dispatch(searchAllSuccess(results.data)))
      .catch(error => console.log(error));
  };
};

// random beer fetch
// https://api.brewerydb.com/v2/beer/random?key=c138c8eb0b70d77459a4c1f2f479533a

export const randomBrewerySuccess = brewery => {
  return {
    type: 'RANDOM_BREWERY_SUCCESS',
    brewery
  };
};

export const fetchRandomBrewery = () => {
  return dispatch => {
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/brewery/random?key=${apikey}&hasImages=y`)
      .then(response => response.json())
      .then(results => dispatch(randomBrewerySuccess(results.data)))
      .catch(error => console.log(error));
  };
};
