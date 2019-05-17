import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {colors, sort} from './reducers'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Menu, Colors, NewColor} from './containers';
import {HashRouter} from 'react-router-dom';

const stateData = {
    'colors' : [
        {
            'id' : 'ieijfd3-34837fdn',
            'title' : '수색',
            'color' : '#84de84',
            'rating' : 0
        },
        {
            'id' : 'ieijfd3-34837fdn',
            'title' : '윤백색',
            'color' : '#326837',
            'rating' : 3
        },
        {
            'id' : 'ieijfd3-34837fdn',
            'title' : '태림색',
            'color' : '#957362',
            'rating' : 5
        }
    ]
};


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

const render = ()=> {ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
        <App/>
        </HashRouter>
    </Provider>,
document.getElementById('root'))};
const store= storeFactory();

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
