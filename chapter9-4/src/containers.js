import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import ColorList from './App';
import { rateColor, removeColor, addColor, sortColors } from './actions';
import { sortFunction } from './lib/array-helpers';

export const NewColor = (props, {store}) =>
    <AddColorForm onNewColor={(title, color) => store.dispatch(addColor(title, color))} />

NewColor.contextTypes = {
    store : PropTypes.object
}
export const Menu = (props, {store}) =>
    <SortMenu sort={store.getState().sort} onSelect={sortBy => store.dispatch(sortColors(sortBy))} />

Menu.contextTypes = {
    store : PropTypes.object
}
// export const Colors = (props, {store}) =>{
//     const {colors, sort} = store.getState();
//     const sortedColors = [...colors].sort(sortFunction(sort));
//     return (
//         <ColorList colors={sortedColors}
//             onRemove = {id=>store.dispatch(removeColor(id))}
//             onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />
//     )
// }

// Colors.contextTypes = {
//     store : PropTypes.object
// }

const mapStateToProps = state => ({colors : [...state.colors].sort(sortFunction(state.sort))})

const mapDispatchToProps = disaptch =>(
    {
        onRemove(id) {
            dispatch(removeColor(id))
        },
        onratechange(id, rating) {
            dispatch(rateColor(id, rating))
        }
    }
)

export const Colors = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList)