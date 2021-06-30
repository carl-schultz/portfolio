import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPAbPtUkjL0LJ1KRuPeFEuf7rz23h6vCo",
  authDomain: "carlschultzportfolio.firebaseapp.com",
  databaseURL: "https://carlschultzportfolio.firebaseio.com",
  projectId: "carlschultzportfolio",
  storageBucket: "carlschultzportfolio.appspot.com",
  messagingSenderId: "12218130551",
  appId: "1:12218130551:web:75462aed33019219c7a672",
  measurementId: "G-SNHWXZPKN0",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
