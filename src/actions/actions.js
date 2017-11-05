import firebase from '../firebase.js';
import apikey from '../apikey.js';

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
      .catch(error => alert(error));
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
      .catch(error => alert(error.message));
  };
};

export const logout = () => {
  return dispatch => {
    firebase.auth().signOut()
      .then(response => dispatch(loginSuccess({})))
      .catch(error => alert(error.message));
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
      .catch(error => alert(error.message));
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
      .catch(error => alert(error.message));
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
    fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/brewery/${id}?key=${apikey}&withLocations=y`)
      .then(response => response.json())
      .then(results => dispatch(fetchBrewerySuccess(results.data)))
      .catch(error => alert(error.message));
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
      .catch(error => alert(error.message));
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
      .catch(error => alert(error.message));
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
      .catch(error => alert(error.message));
  };
};

export const favoriteSuccess = favorites => {
  return {
    type: 'FAVORITE_SUCCESS',
    favorites
  };
};

export const fetchFavorites = (userID) => {
  return dispatch => {
    const faves = firebase.database().ref(userID + '/favorites');
    faves.on('value', (snapshot) => {
      dispatch(favoriteSuccess(snapshot.val()));
    });
  };
};

export const favBeerSuccess = favBeerData => {
  return {
    type: 'FAV_BEER_SUCCESS',
    favBeerData
  };
};

export const fetchFavoriteBeers = (beerIDs) => {
  return dispatch => {

    const unresolvedPromises = beerIDs.map( ID => {
      return fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/beer/${ID.id}?key=c138c8eb0b70d77459a4c1f2f479533a&withBreweries=y`)
        .then(response => response.json())
        .then(results => results.data)
        .then(beerObject => Object.assign({}, beerObject, {firebaseID: ID.firebaseID, isFav: true }));
    });

    const promiseAll = Promise.all(unresolvedPromises);

    promiseAll.then( favBeerData => {
      dispatch(favBeerSuccess(favBeerData));
    });
  };
};

export const favBrewerySuccess = favBeerData => {
  return {
    type: 'FAV_BREWERY_SUCCESS',
    favBeerData
  };
};

export const fetchFavoriteBreweries = (breweryIDs) => {
  return dispatch => {

    const unresolvedPromises = breweryIDs.map( ID => {
      return fetch(`https://galvanize-cors-proxy.herokuapp.com/https://api.brewerydb.com/v2/brewery/${ID.id}?key=c138c8eb0b70d77459a4c1f2f479533a&withLocations=y`)
        .then(response => response.json())
        .then(results => results.data)
        .then(breweryObject => Object.assign({}, breweryObject, {firebaseID: ID.firebaseID, isFav: true }));
    });

    const promiseAll = Promise.all(unresolvedPromises);

    promiseAll.then( favBeerData => {
      dispatch(favBrewerySuccess(favBeerData));
    });
  };
};

export const deleteFavoriteBrewerySuccess = (firebaseID) => {
  return {
    type: 'DELETE_FAV_BREWERY_SUCCESS',
    firebaseID
  };
};

export const deleteFavoriteBrewery = (userId, firebaseID) => {
  return dispatch => {
    firebase.database().ref(userId + '/favorites/' + firebaseID ).remove()
      .then(dispatch(deleteFavoriteBrewerySuccess(firebaseID)));
  };
};

export const deleteFavoriteBeerSuccess = (firebaseID) => {
  return {
    type: 'DELETE_FAV_BEER_SUCCESS',
    firebaseID
  };
};

export const deleteFavoriteBeer = (userId, firebaseID) => {
  return dispatch => {
    firebase.database().ref(userId + '/favorites/' + firebaseID ).remove()
      .then(dispatch(deleteFavoriteBeerSuccess(firebaseID)));
  };
};

export const addFavoriteBeerSuccess = (beer) => {
  return {
    type: 'ADD_FAV_BEER_SUCCESS',
    beer
  };
};

export const addFavoriteBeer = (userId, type, id, beer) => {
  return dispatch => {
    if (!beer.isFav){
      firebase.database().ref(userId + '/favorites').push({
        type,
        id
      })
        .then(dispatch(addFavoriteBeerSuccess(beer)));
    } else {
      return;
    }
  };
};

export const addFavoriteBrewerySuccess = (brewery) => {
  return {
    type: 'ADD_FAV_BREWERY_SUCCESS',
    brewery
  };
};

export const addFavoriteBrewery = (favorites, userId, type, id, brewery) => {
  return dispatch => {
    if (!brewery.isFav){
      firebase.database().ref(userId + '/favorites').push({
        type,
        id
      })
        .then(dispatch(addFavoriteBrewerySuccess(brewery)));
    } else {
      return;
    }
  };
};
