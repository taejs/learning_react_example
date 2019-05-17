import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import { rateColor, removeColor } from './actions';
import { sortFunction } from './lib/array-helpers';
import {Menu, NewColor, Colors, ColorList} from './containers'
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



const App = () => 
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/" component={() => 
        <div className="app">
            <Menu />
            <NewColor />
            <Colors />
        </div>} />
        <Route component={() => <div>wohops</div>} />
    </Switch>
export default App;