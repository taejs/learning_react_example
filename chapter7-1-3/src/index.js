import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Display = ({ifTruthy = true, children}) => (ifTruthy) ? Children.only(children) : null;

const age = 21;
ReactDOM.render(
    <Display ifTruthy={age >= 21}>
        <h1>들어오세요</h1>
    </Display>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
