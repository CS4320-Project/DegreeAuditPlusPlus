import React from "react";
import UserInfo from './UserInfo';
import StudentSearch from './StudentSearch';
import ToggleButtons from './ToggleButtons';
import Table from './Table.js';
import Tab from './Tab.js';

export default class Home extends React.Component{
  state = {users:[]}

  render(){
    return(
      <div>
        <UserInfo student={this.props.student}/>
	      <ToggleButtons />
        <Tab></Tab>
        <Table courses={this.props.student.courses}/>
      
       
        

      </div>

    );
  }
}
