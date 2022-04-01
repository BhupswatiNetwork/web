import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAc7dL5IUvl6b9X_PpbpIAaubIVnxANPc4",
  authDomain: "bnpl-7e2d7.firebaseapp.com",
  projectId: "bnpl-7e2d7",
  storageBucket: "bnpl-7e2d7.appspot.com",
  messagingSenderId: "263419410115",
  appId: "1:263419410115:web:331bc72a2238012cfd5476",
  measurementId: "G-6RCWQ19QBK",
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
