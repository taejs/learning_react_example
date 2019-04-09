import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Summary.css';


class Summary extends Component {
    static propTypes = { 
        ingredients : PropTypes.number.isRequired,
        steps : PropTypes.number.isRequired,
        title : (props, propName) => {
            if(typeof props[propName] !== 'string') return new Error('제목(title)은 문자열이어야 합니다.');
            else if(props[propName].length > 20) return new Error('제목(title)은 20자 이내여야 합니다.');
            return null;
        }
    }
    static  defaultProps = {
        ingredients : 0,
        steps : 0,
        title : '[무제]'
    }
    render() {
        const {title, ingredients, steps} = this.props
        return (
        <div className="summary">
            <h1>{title}</h1>
            <p>
                <span>재료 {ingredients} 종류 | </span>
                <span>총 {steps} 단계</span>
            </p>
        </div>
        );
    }
}


export default Summary;

