import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/HomePage'
const mongoose = require("mongoose");
const url = process.env.URL; 


function App() {
  console.log(url)
  return (
    <div className="App">
      <HomePage />






      {/* react starter code       */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



    </div>
  );
}

export default App;
