import React, { Component } from 'react';
// import logo from './logo.svg';
import JSLiveEval from './components/JSLiveEval.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JSLiveEval />
      </div>
    );
  }
}

export default App;
