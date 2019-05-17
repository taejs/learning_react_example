import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import { rateColor, removeColor, addColor, sortColors } from './actions';
import { sortFunction } from './lib/array-helpers';
import {connect} from 'react-redux';

export const NewColor = connect(
    null,
    dispatch => 
    ({
        onNewColor(title, color) {
            dispatch(addColor(title, color));
        }
    })(AddColorForm)
)

export const Menu = connect(
    state => ({
        sort : state.sort
    }),
    dispatch => ({
        onSelect(sortBy) {
            dispatch(sortColors(sortBy))
        }
    })(SortMenu)
)

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

const mapDispatchToProps = dispatch =>(
    {
        onRemove(id) {
            dispatch(removeColor(id))
        },
        onratechange(id, rating) {
            dispatch(rateColor(id, rating))
        }
    }
)

export const ColorList = (props,{store}) => {
    const {colors, sort} = store.getState();
    const sortedColors = [...colors].sort(sortFunction(sort));
    return (<div className="color-list">
    {(colors.length === 0) ?
        <p>색이 없습니다. 색을 추가해주세요</p> :
        sortedColors.map(color =>
        <Color key={color.id}
            {...color}
            onRate={(rating)=> store.dispatch(rateColor(color.id, rating))}
            onRemove={()=> store.dispatch(removeColor(color.id)) }/>
        )    
    }
    </div>)
}

ColorList.contextTypes = {
    store : PropTypes.object
}



export const Colors = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList)