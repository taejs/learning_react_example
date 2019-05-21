import {ADD_ARTICLE} from '../constants/action-types'
const initialState = {
    articles : []
}

//simple reducer taking the initial state as the first parameter
//As a second parameter we’ll provide action. 
function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE) {
    }
    return state;
}

export default rootReducer;