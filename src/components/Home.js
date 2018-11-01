import React from "react";
import UserInfo from './UserInfo';
import ToggleButtons from './ToggleButtons';
import Table from './Table';
import Tab from './Tab';

export default class Home extends React.Component{
  state = {users:[]}

  render(){
    return(
      <div>
        <UserInfo student={this.props.student}/>

        <Tab student={this.props.student}></Tab>
        <Table courses={this.props.student.courses}/>
        
      </div>

    );
  }
}
