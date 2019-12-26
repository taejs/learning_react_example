import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './components/Counter';
import reducer from './reducers/reducers';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

const render =() => {
  ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={()=> action('INCREMENT')}
    onDecrement={()=> action('DECREMENT')}
    onIncrementAsync={() => action('INCREMENT_ASYNC')}
  />
  ,document.getElementById('root'));
}

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
