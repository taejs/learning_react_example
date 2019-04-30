import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {colors, sort} from './reducers'
import {addColor} from './actionCreators'
import C from './constants'
import stateData from './initialState'

const logger = store => next => action => {
    let result;
    console.groupCollapsed('디스패칭', action.type);
    console.log('이전 상태', store.getState());
    result = next(action);
    console.log('다음 상태', store.getState());
    console.groupEnd();
}

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : initialState
    )

const store = storeFactory();
store.dispatch(addColor('#ffffff', '밝은 하양'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
