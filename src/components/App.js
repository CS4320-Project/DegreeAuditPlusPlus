import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header.js';
import Main from './Main.js';
import Table from './Table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Table/>
        
      </div>
    );
  }
}

export default App;
