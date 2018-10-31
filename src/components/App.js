import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Main from './Main.js';

const USER = {
  pawPrint: 'sbc436',
  firstName: 'Sara',
  lastName: 'Caponi',
  degreeProgram: 'Computer Science',
  expectedGradDate: 'SP2020',
  studentNumber: 14261685,
  advisor: 'Nicholas Balser',
  advisorEmail: 'BalserN@missouri.edu'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main student={USER}/>
      </div>
    );
  }
}

export default App;
