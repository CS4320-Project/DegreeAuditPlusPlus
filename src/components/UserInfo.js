import React from 'react';
import { Label } from 'react-bootstrap';
import "../styles/UserInfo.css";

export default class UserInfo extends React.Component {
  render() {
    return (
      <div>
      <div>
        <h2>
          Student Information
        </h2>
      </div>
      <div id="wrapper" className="clear">
      <div className="column" id="left">
        <h4>
        <Label>Name</Label>
        </h4>

        <h4>
          <Label>Degree Program</Label>
        </h4>
        <h4>
          <Label>Graduation Date</Label>
        </h4>
        <h4>
          <Label>Email</Label>
        </h4>
        <h4>
          <Label>Student Number</Label>
        </h4>
        <h4>
          <Label>Advisor</Label>
        </h4>
        <h4>
          <Label>Advisor Email</Label>
        </h4>
      </div>

      <div className="column" id="right">
        <h4>
        Sara Caponi
        </h4>

        <h4>
        Computer Science
        </h4>
        <h4>
        May 2020
        </h4>
        <h4>
        sbc436@mail.missouri.edu
        </h4>
        <h4>
        14261685
        </h4>
        <h4>
        Nicholas Balser
        </h4>
        <h4>
        BalserN@missouri.edu
        </h4>
      </div>
      </div>
      </div>
    );
  }
}
