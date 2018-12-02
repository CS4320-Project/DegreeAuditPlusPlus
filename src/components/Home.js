import React from "react";
import UserInfo from './UserInfo';
import GPACalculator from './GPACalculator';
import Tab from './Tab';

export default class Home extends React.Component{

  componentDidMount(){
    if(this.props && this.props.student){
      fetch('/api/students', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pawprint: this.props.student.pawPrint
        })
      });
    }
  }

  render(){
    if(!this.props.student){
      return null;
    }

    return(
      <div>
        { this.props && this.props.student &&
          <React.Fragment>
            <UserInfo student={this.props.student}/>
            <GPACalculator/>
            <Tab student={this.props.student}/>
          </React.Fragment>
        }
      </div>
    );
  }
}
