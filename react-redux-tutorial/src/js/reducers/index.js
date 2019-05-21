import {ADD_ARTICLE} from '../constants/action-types'
const initialState = {
    articles : []
}

//simple reducer taking the initial state as the first parameter
//As a second parameter we’ll provide action. 
function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE) {
        return Object.assign({}, state, { // The state is immutable and cannot change in place. 
            articles : state.articles.concat([action.payload])
        })
    }
    return state;
}

export default rootReducer;