import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {colors, sort} from './reducers'
import C from './constants'
const store =createStore(combineReducers({colors, sort}), (localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {})); //localStorage에 값이 있으면 

store.subscribe(()=> localStorage['redux-store'] = JSON.stringify(store.getState()));
//store.subscribe(()=>console.log('색 개수: ', store.getState().colors.length ));
const logState = ()=>console.log('다음 상태 :', store.getState());
store.subscribe(logState); //함수리스너 등록

store.dispatch({
    "type" : C['ADD_COLOR'],
    "id" : "8674838332-595893",
    "title" : "파티 핑크",
    "color" : "#ff00f7",
    "rating" : 7,
    "timestamp" : "2019-03-28"
})

store.subscribe(logState); //함수 리스너 해제

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
