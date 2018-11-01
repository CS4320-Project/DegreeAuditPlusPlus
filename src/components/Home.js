import React from "react";
import UserInfo from './UserInfo';
import Tab from './Tab';

export default class Home extends React.Component{
  render(){
    let body;
    if(!this.props.student){
      return null;
    }

    return(
      <div>
        <UserInfo student={this.props.student}/>
        <Tab student={this.props.student}/>
      </div>
    );
  }
}
