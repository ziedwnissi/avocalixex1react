import React, { Component } from 'react';
import './App.css';
import Diceware from './diceware';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Diceware />
        </header>
      </div>
    );
  }
}

export default App;
