import { compose } from 'redux'

export const getFirstArrayItem = array => array[0];

export const filterArrayById = (array, id) => array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)