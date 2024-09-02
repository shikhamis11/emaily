import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
 
// 2) Import App component as usual
import App from './components/App';
import reducers from './reducers';

//dev  only axios helpers
import axios from 'axios';
window.axios = axios;
 
const store = createStore(reducers, {}, applyMiddleware(thunk));



// 3) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// 5) Show the component on the screen
root.render(<Provider store={store}><App /></Provider>);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);