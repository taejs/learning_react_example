import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const findChild = (children, child) => 
    Children.toArray(children)
            .filter(c=> {
                console.log(c.type);
                return c.type === child
            })[0];

const whenTruthy = ({children}) =>
    Children.only(children);

const WhenFalsy = ({children}) =>
    Children.only(children);

const Display = ({ifTruthy=true, children}) => 
    (ifTruthy) ?
        findChild(children, whenTruthy) : 
        findChild(children, WhenFalsy)

const age = 21;
ReactDOM.render(
    <Display ifTruthy={age >= 21}>
        <whenTruthy>
            <h1>들어오세요</h1>
        </whenTruthy>
        <WhenFalsy>
            <h1>애들은 가!</h1>
        </WhenFalsy>
    </Display>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
