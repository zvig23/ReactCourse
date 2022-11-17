import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slogan from './Components/Slogan/Slogan';
import Copy from './Components/Copy/Copy';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slogan/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Copy/>
    </div>
  );
}

export default App;
