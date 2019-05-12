import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MainMenu} from './mainmenu';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import {Home, About, Events, Products, Contacts} from './pages'





ReactDOM.render(
    <HashRouter>
    <div class="main">
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/contacts" component={Contacts} />
    </div>
    </HashRouter>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
