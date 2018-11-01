import React from "react";
import UserInfo from './UserInfo';
import Tab from './Tab';

export default class Home extends React.Component{
  state = {users:[]}
  //calls the other files to display them on the declared page
  render(){
    return(
      <div>
        <UserInfo student={this.props.student}/>
        <Tab student={this.props.student}/>


      </div>

    );
  }
}
