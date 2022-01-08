import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//FIREBASE

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBNAeWgfny8GOP-YCWtE_w0Ons--idA73s",
  authDomain: "app-flores-emiliano.firebaseapp.com",
  projectId: "app-flores-emiliano",
  storageBucket: "app-flores-emiliano.appspot.com",
  messagingSenderId: "807523477784",
  appId: "1:807523477784:web:072264c91ade2d58df166d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//APP
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


