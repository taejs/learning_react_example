// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import store from "./js/store/index";
// import { addArticle } from "./js/actions/index";
// window.store = store;
// window.addArticle = addArticle;
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// if you're in create-react-app import the files as:
 import store from "./js/store/index";
// import App from "./js/components/App.jsx";
import {addArticle} from './js/actions/index'
window.store = store;
window.addArticle =addArticle;