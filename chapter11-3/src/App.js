import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch} from 'react-router-dom'
import {Color, Colors, NewColor} from './containers'

function App() {
  return (
    <Switch>
      <Route exact path="/:id" component={Color} />
      <Route path="/" component={()=>(<div className="app"><Menu /><NewColor /><Colors /></div>)} />
    </Switch>
  );
}

export default App;
