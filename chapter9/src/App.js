import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import SortMenu from './sortMenu';
import Color from './Color';
import { rateColor, removeColor } from './actions';
import { sortFunction } from './lib/array-helpers';


const ColorList = ({store}) => {
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


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors : []
        }
        
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }
    render() {
        const { addColor, rateColor, removeColor } = this;
        const { colors } = this.state;
        const store = this.props.store;
        return (
            <div className="app">
                <SortMenu store={store}/>
                <AddColorForm store={store} />
                <ColorList store={store} />
            </div>
        )
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id : v4(),
                title,
                color, 
                rating :0
            }
        ]
        this.setState({colors});
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color : {
                    ...color,
                    rating
                }
            )
            this.setState({colors});
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors})
    }

}
export default App;