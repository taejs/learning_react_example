import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import { rateColor, removeColor } from './actions';
import { sortFunction } from './lib/array-helpers';


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


class App extends Component {
    getChildContext() {
        return {
            store : this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    constructor(props) {
        super(props)
        this.state = {
            colors : []
        }
    
    }
    render() {
        const { colors } = this.state;
        return (
            <div className="app">
                <SortMenu />
                <AddColorForm />
                <ColorList  />
            </div>
        )
    }
}

App.childContextTypes = {
    store : PropTypes.object.isRequired
}
export default App;