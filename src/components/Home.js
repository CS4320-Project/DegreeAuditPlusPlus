import React, { Component } from "react";
import UserInfo from './UserInfo';

import StudentSearch from './StudentSearch';


import ToggleButtons from './ToggleButtons';

export default class Home extends React.Component{
  state = {users:[]}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));
  // }

  render(){
    return(
      <div>
        {this.state.users.map( user =>
          <div key={user.id}>{user.username}</div>
        )}
        <UserInfo/>
	      <ToggleButtons/>
        <StudentSearch/>
      </div>

    );
  }
}
