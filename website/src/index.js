import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./fullsize.css";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCkrAg7caZtjDXw7iJygaSacOYQKK1jX8E",
  authDomain: "deltachase-leaderboards.firebaseapp.com",
  projectId: "deltachase-leaderboards",
  storageBucket: "deltachase-leaderboards.appspot.com",
  messagingSenderId: "72712807157",
  appId: "1:72712807157:web:d8bab8a889550b7bce9bbc",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
