import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers/index'
import {forbiddenWordsMiddleware} from '../middleware/index'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//the state in redux comes from reducers. -> reducers produce the state of your application.
const store = createStore(rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)));

export default store;