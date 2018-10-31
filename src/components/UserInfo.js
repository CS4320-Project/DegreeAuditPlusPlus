import React from 'react';
import { Label } from 'react-bootstrap';
import "../styles/UserInfo.css";

export default class UserInfo extends React.Component {
  render() {
    let gradDate = '';
    if(this.props.student.expectedGradDate.includes("SP")){
      gradDate += "May ";
    } else if(this.props.student.expectedGradDate.includes("FS")){
      gradDate += "Fall ";
    }
    gradDate += this.props.student.expectedGradDate.slice(2,6);

    return (
      <div>
        <div>
          <h2>Student Information</h2>
        </div>
        <div id="wrapper" className="clear">
          <div className="column" id="left">
            <h4><Label>Name</Label></h4>
            <h4><Label>Degree Program</Label></h4>
            <h4><Label>Graduation Date</Label></h4>
            <h4><Label>Email</Label></h4>
            <h4><Label>Student Number</Label></h4>
            <h4><Label>Advisor</Label></h4>
            <h4><Label>Advisor Email</Label></h4>
          </div>

          <div className="column" id="right">
            <h4>{this.props.student.firstName} {this.props.student.lastName}</h4>
            <h4>{this.props.student.degreeProgram}</h4>
            <h4>{gradDate}</h4>
            <h4>{this.props.student.pawPrint}@mail.missouri.edu</h4>
            <h4>{this.props.student.studentNumber}</h4>
            <h4>{this.props.student.advisor}</h4>
            <h4>{this.props.student.advisorEmail}</h4>
          </div>
        </div>
      </div>
    );
  }
}
