import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Main from './Main.js';
{
/*
  This file holds our current information
  that is used to fill the tables on our
  webpage. It hold all the student information
  that is displayed to the student and the advisor.
*/
}

const storage = window.localStorage;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: storage.getItem('isAuthenticated'),
      user: null
    };
  }

  componentDidMount(){
    let user = storage.getItem('user');
    if(user !== 'undefined'){
      this.setState({user: JSON.parse(user)});
    }
  }

  userHasAuthenticated = (authenticated, user) => {
    this.setState({isAuthenticated: authenticated});
    storage.setItem('isAuthenticated', authenticated);
    if(user){
      this.setState({user: user});
      storage.setItem('user', JSON.stringify(user));
    } else {
      this.setState({user: null});
      storage.removeItem('user');
    }
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
          <Main user={this.state.user} childProps={childProps}/>
      </div>
    );
  }
}

export default App;
