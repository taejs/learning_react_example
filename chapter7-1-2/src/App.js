import React, {Component} from 'react';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import Color from './Color';


const ColorList = ({colors = [], onRemove=f=>f, onRate=f=>f}) =>
    <div className="color-list">
    {(colors.length === 0) ?
        <p>색이 없습니다. 색을 추가해주세요</p> :
        colors.map(color =>
        <Color key={color.id}
            {...color}
            onRate={(rating)=> onRate(color.id, rating)}
            onRemove={()=> onRemove(color.id) }/>
        )    
    }
    </div>


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
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor}/>
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