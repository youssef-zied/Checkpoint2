//ok
import React, { Component } from 'react';
import logo from './logo.svg';
import Republic from './Republic.svg';
import Grepublic from './GalacticRepublic2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br/>
          <img src={Grepublic} className="App-logo2" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="Title2Dark">
            Join the Dark Side
            
          </p>
          <br /> <hr/> <br/>
          <p className="Title2">
            Or Join the Force
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
      </div>
    );
  }
}

export default App;
