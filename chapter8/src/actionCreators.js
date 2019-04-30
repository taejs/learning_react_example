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
})