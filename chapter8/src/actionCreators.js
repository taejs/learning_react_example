import C from './constants'

export const removeColor = id =>
({
    type : C.REMOVE_COLOR,
    id
})

export const rateColor = (id, rating) =>
({
    type : C.RATE_COLOR,
    id,
    rating
})

export const sortColors = sortedBy =>
(sortedBy === 'rating') ? ({
    type:C.SORT_COLORS,
    sortedBy : 'SORTED_BY_RATING'
}) :
(sortedBy === 'title') ? ({
    type : C.SORT_COLORS,
    sortBy : 'SORTED_BY_TITLE'
}) : ({
    type : C.SORT_COLORS,
    sortBy : 'SORTED_BY_DATE'
});

export const addColor = (title, color) =>  ({
    type : C.ADD_COLOR,
    id : Math.random()*458723233,
    title,
    color,
    timestamp : new Date.toString()
})

//store.dispatch(addColor('잔디', '#998f12')); 캡슐화 + 디버깅 용이