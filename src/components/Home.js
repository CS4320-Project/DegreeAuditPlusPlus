import React from "react";
import UserInfo from './UserInfo';

import StudentSearch from './StudentSearch';


import ToggleButtons from './ToggleButtons';

export default class Home extends React.Component{
  state = {users:[]}

  render(){
    return(
      <div>
        <StudentSearch/>
        <h1>Welcome to DegreeAudit++</h1>
        {this.state.users.map( user =>
          <div key={user.id}>{user.username}</div>
        )}
        <UserInfo/>
	      <ToggleButtons/>
      </div>

    );
  }
}
