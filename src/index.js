import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// deploy with firebase
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/order
import { initializeApp } from "firebase/app";
// eslint-disable-next-line import/order
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACZIs8WBEe7nG4Yvr4WU3tgp0qdJq43YI",
  authDomain: "detta-shops.firebaseapp.com",
  projectId: "detta-shops",
  storageBucket: "detta-shops.appspot.com",
  messagingSenderId: "445370690637",
  appId: "1:445370690637:web:81692ca3a1c52b2b540004",
  // eslint-disable-next-line comma-dangle
  measurementId: "G-FNJDJK5VX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById("root")
);
