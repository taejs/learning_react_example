import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import {Home, About, Events, Products, Contacts} from './pages'

const waylink = true;


ReactDOM.render(
waylink ? 
<BrowserRouter>
<div class="main">
    <Link to="about">[회사소개]</Link>
    <Link to="events">[이벤트]</Link>
    <Link to="about">[회사소개]</Link>
</div></BrowserRouter> :

    <HashRouter>
    <div class="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
    </div>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
