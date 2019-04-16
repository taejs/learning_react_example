import React, { Component } from 'react';
import logo from './logo.svg';
import HiddenMessage from './HiddenMessage'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide : true
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      hide : !(state.hide)
    }));
  }

  render() {
    const { hide } = this.state;
    return (
      <div className="App" onClick={this.handleClick}>
        <HiddenMessage hide={hide} children="Hui sdfMyNam eisNate ddf" />
      </div>
    );
  }
}

export default App;
