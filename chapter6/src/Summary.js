import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Summary.css';


class Summary extends Component {
    render() {
        const {title, ingredients, steps} = this.props
        return (
        <div className="summary">
            <h1>{title}</h1>
            <p>
                <span>재료 {ingredients.length} 종류 | </span>
                <span>총 {steps.length} 단계</span>
            </p>
        </div>
        );
    }
}

Summary.propTypes = {
    ingredients : PropTypes.array,
    steps : PropTypes.array,
    title : PropTypes.string
}


export default Summary;

