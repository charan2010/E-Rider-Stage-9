import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD5zqVPASSdxY5rxH7v3EM9-RcOzcVFelc",
  authDomain: "e-rider-ck.firebaseapp.com",
  projectId: "e-rider-ck",
  storageBucket: "e-rider-ck.appspot.com",
  messagingSenderId: "893260926303",
  appId: "1:893260926303:web:4155185509ff41a881baea"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
