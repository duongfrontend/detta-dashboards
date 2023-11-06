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
  apiKey: "AIzaSyBuUR07oSu26x23v4zV3G6ZKUlR9InXRjo",
  authDomain: "detta-stack.firebaseapp.com",
  projectId: "detta-stack",
  storageBucket: "detta-stack.appspot.com",
  messagingSenderId: "281235499533",
  appId: "1:281235499533:web:d92c3f0e8d40d42cad4344",
  measurementId: "G-PVBCPV4YEW",
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
