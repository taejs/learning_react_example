import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import { rateColor, removeColor } from './actions';
import { sortFunction } from './lib/array-helpers';
import {Menu, NewColor, Colors} from './containers'
import {findById} from './functions'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'

const ColorDetails = ({title, color, history}) =>
<div className="colors-details" style={{backgroundColor : color}}
    onClick={()=>history.goBack()}>
    <h1>{title}</h1>
    <h1>{color}</h1>
</div>

const ColorWrapper = connect(
    (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)


const ColorList = (props,{store}) => {
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


const App = () => 
    <Switch>
        <Route exact path="/:id" Component={Color} />
        <Route path="/" Component={() => 
        <div className="app">
            <Menu />
            <NewColor />
            <Colors />
        </div>}/>
    </Switch>
export default App;