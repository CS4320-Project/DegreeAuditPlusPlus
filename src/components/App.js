import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Main from './Main.js';

const USER = {
  pawPrint: 'sbc436',
  firstName: 'Sara',
  lastName: 'Caponi',
  degreeProgram: 'Computer Science',
  degreeMinor: 'Mathematics',
  expectedGradDate: 'SP2020',
  studentNumber: 14261685,
  advisor: 'Nicholas Balser',
  advisorEmail: 'BalserN@missouri.edu',
  advisorPhone: '573-882-2845',
  courses:[
    {
      courseNumber: 'CS1050',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS2050',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS4320',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS2830',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS3330',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS3050',
      courseTitle: '',
      completed: true,
      gradeReceived: 'A'
    },
    {
      courseNumber: 'CS4830',
      courseTitle: '',
      completed: true,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT4400',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT2610',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT1610',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT2600',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT3460',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
    {
      courseNumber: 'IT4830',
      courseTitle: '',
      completed: false,
      gradeReceived: 'B'
    },
  ]
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    console.log("Authentication!");
    this.setState({isAuthenticated: authenticated});
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App">
        <Header childProps={childProps}/>
        <Main student={USER} childProps={childProps}/>
      </div>
    );
  }
}

export default App;
