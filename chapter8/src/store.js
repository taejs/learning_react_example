import {createStore, combineReducers} from 'redux'
import {colors, sort} from './reducers'
import C from './constants'

const initialState = {
    "colors" : [
        {
            "id" : "8674838332-595893",
            "title" : "바닷빛 파랑",
            "color" : "#0070ff",
            "rating" : 3,
            "timestamp" : "2019-03-28"
        },
        {
            "id" : "8674838332-595893",
            "title" : "토마토",
            "color" : "#d0012",
            "rating" : 2,
            "timestamp" : "2019-03-28"
        },
        {
            "id" : "8674838332-595893",
            "title" : "잔디",
            "color" : "#67bf4f",
            "rating" : 3,
            "timestamp" : "2019-03-28"
        }
    ],
    "sort" : "SORTED_BY_TITLE"
}

//const store =createStore(combineReducers({colors, sort}), initialState);

const store =createStore(combineReducers({colors, sort}), (localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']):'')); //localStorage에 값이 있으면 

//store.subscribe(()=>console.log('색 개수: ', store.getState().colors.length ));
const logState = ()=>console.log('다음 상태 :', store.getState());
store.subscribe(logState); //함수리스너 등록

store.dispatch({
    'type' : C.ADD_COLOR,
    "id" : "8674838332-595893",
    "title" : "파티 핑크",
    "color" : "#ff00f7",
    "rating" : 7,
    "timestamp" : "2019-03-28"
})

store.subscribe(logState); //함수 리스너 해제

console.log(store.getState());