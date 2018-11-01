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
      courseTitle: 'Algorithm Design and Programming I',
      completed: 'past',
      gradeReceived: 'A',
      credit: 4,
    },
    {
      courseNumber: 'CS2050',
      courseTitle: 'Algorithm Design and Programming II',
      completed: 'past',
      gradeReceived: 'B-',
      credit: 4,
    },
    {
      courseNumber: 'CS4320',
      courseTitle: 'Software Engineering I',
      completed: 'current',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'CS2830',
      courseTitle: 'Introduction to the Internet, WWW and Multimedia Systems',
      completed: 'past',
      gradeReceived: 'A',
      credit: 3,
    },
    {
      courseNumber: 'CS3330',
      courseTitle: 'Object Oriented Programming',
      completed: 'past',
      gradeReceived: 'A-',
      credit: 3,
    },
    {
      courseNumber: 'CS3050',
      courseTitle: 'Advanced Algorithm Design',
      completed: 'past',
      gradeReceived: 'A',
      credit: 3,
    },
    {
      courseNumber: 'CS4830',
      courseTitle: 'Science and Engineering of the World Wide Web',
      completed: 'outstanding',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'IT4400',
      courseTitle: 'C#/.NET Development',
      completed: 'outstanding',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'IT2610',
      courseTitle: 'Audio/Video I',
      completed: 'current',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'IT1610',
      courseTitle: 'Introduction to Entertainment Media',
      completed: 'current',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'IT2600',
      courseTitle: 'Digital Multimedia',
      completed: 'current',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'CS4970',
      courseTitle: 'Senior Capstone Design I',
      completed: 'outstanding',
      gradeReceived: '-',
      credit: 3,
    },
    {
      courseNumber: 'CS4980',
      courseTitle: 'Senior Capstone Design II',
      completed: 'outstanding',
      gradeReceived: '-',
      credit: 3,
    },
  ]
}



const storage = window.localStorage;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: storage.getItem('isAuthenticated')
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated});
    storage.setItem('isAuthenticated', authenticated);
    if(!authenticated){
      window.location = '/login';
    }
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
