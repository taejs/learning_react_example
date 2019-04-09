import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Summary from './Summary';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Summary title="땅콩버터와 젤리"
        ingredients={3}
        steps={2}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
