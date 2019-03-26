import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bibliotheque from './components/Bibliotheque';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>03 - Bibliotheque</h1>
        </header>
        <Bibliotheque />
      </div>
    );
  }
}

export default App;
