import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddColorForm from './AddColorForm';
import FunctionalAddColorForm from './FunctionalAddColorForm';
import * as serviceWorker from './serviceWorker';


//inverse Data flow
const logColor = (title, color) => console.log(`새로운 색 : ${title} ${color}`);
const alertColor = (title, color) => alert(`추가된 색은 ${color}(${title})`);
//ReactDOM.render(<AddColorForm onNewColor={alertColor}/>, document.getElementById('root'));
ReactDOM.render(<FunctionalAddColorForm onNewColor={alertColor}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
