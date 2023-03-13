import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBiOr923nMl_O279zDS6C-dnwl5mMpl7IE",
  authDomain: "coderhouse-ecommerce-cele.firebaseapp.com",
  projectId: "coderhouse-ecommerce-cele",
  storageBucket: "coderhouse-ecommerce-cele.appspot.com",
  messagingSenderId: "538815382526",
  appId: "1:538815382526:web:40c6ac8a2f8e264c0f36af"
};

initializeApp(firebaseConfig);


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
