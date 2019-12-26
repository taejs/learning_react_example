import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { observable, reaction, computed, autorun } from 'mobx';

const calculator = observable({
    a:1,
    b:2
});

reaction(
    ()=>calculator.a,
    (value, reaction) => {
        console.log(`a 값이 ${value}로 바뀌었네요!`);
    }
)

reaction(
    ()=>calculator.b,
    (value) => {
        console.log(`b 값이 ${value}로 바뀌었네요`)
    }
)

calculator.a =10;
calculator.b = 20;
calculator.a=30;

const sum = computed(()=> {
    console.log('계산중입니다.');
    return calculator.a + calculator.b
});

sum.observe(()=>calculator.a);
sum.observe(()=>calculator.b);

console.log(sum);

calculator.a=20;
console.log(sum);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
