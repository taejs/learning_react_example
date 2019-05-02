import React, { Component } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected : props.starsSelected || 0
        }
        this.change = this.change.bind(this);
    }
    static defaultProps = {
        totalStars : 5
    }
    static propTypes = {
        totalStars : PropTypes.number
    }
    change(starsSelected) {
        this.setState({starsSelected});
    }
    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => 
                    <Star key={i}
                        selected={i<starsSelected}
                        onClick={()=>this.change(i+1)}
                    />
                )}
                <p>별점 : {starsSelected} / {totalStars}</p>
            </div>
        )
    }
}


export default StarRating;