import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyAuxEdr42hDcnU3qkYDfi26kcJ3YlYGE",
  authDomain: "bnpl-website.firebaseapp.com",
  databaseURL: "https://bnpl-website-default-rtdb.firebaseio.com",
  projectId: "bnpl-website",
  storageBucket: "bnpl-website.appspot.com",
  messagingSenderId: "311996669269",
  appId: "1:311996669269:web:eceb5a5af1c0709e3ca3dc",
  measurementId: "G-08NCXX1XHZ",
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const notesRef = databaseRef.child("bnpl-website");

export default firebase;
