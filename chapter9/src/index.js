import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const colors = {
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


const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : initialState
    )

const render = ()=> ReactDOM.render(<App store={store}/>, document.getElementById('root'));
const store= storeFactory();

store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
