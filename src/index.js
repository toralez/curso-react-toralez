import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyC_ylAwcgw9Fb9KzH3Hul9vc3yCHSu0ht0",
  authDomain: "react-teco.firebaseapp.com",
  projectId: "react-teco",
  storageBucket: "react-teco.appspot.com",
  messagingSenderId: "17132291792",
  appId: "1:17132291792:web:37a87dfae644556143c0d5"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
