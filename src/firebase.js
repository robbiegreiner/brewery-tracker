import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAM3fByyJ-ZeixWtuUA4P_qXAL8-XGBJa8",
  authDomain: "brewery-tracker-8a79a.firebaseapp.com",
  databaseURL: "https://brewery-tracker-8a79a.firebaseio.com",
  projectId: "brewery-tracker-8a79a",
  storageBucket: "brewery-tracker-8a79a.appspot.com",
  messagingSenderId: "59254495873"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
