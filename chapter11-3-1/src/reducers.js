import C from './constants'
export const color = (state ={}, action) => {
    switch(action.type) {
        case C.ADD_COLOR :
            return {
                id : action.id,
                title: action.title,
                color : action.color,
                timestamp : action.timestamp,
                rating : 0
            }
        break;
        case C.RATE_COLOR :
            return (state.id !== action.id) ? 
            state : {...state, rating : action.rating}
        break;
        default : return state;
    }
}

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR :
        return [ ...state, color({}, action)];
        break;
        case C.RATE_COLOR :
        return state.map( c=> color(c, action));
        break;
        case C.REMOVE_COLOR :
        return state.filter(c=>c.id!==action.id);
        default: return state;
    }
}

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch(action.type) {
        case C.SORT_COLORS:
        return action.sortBy;
        break;
        default : return state;
    }
}
