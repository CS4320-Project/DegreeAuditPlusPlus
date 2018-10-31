import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
<<<<<<< HEAD
import "../styles/Login.css";
import Home from './Home';
import StudentSearch from './StudentSearch'
import { Switch, Route } from 'react-router-dom';

=======
import "../styles/LoginForm.css";
>>>>>>> a109276a7655a4c1a3f928ffc1486e0753bdfb61

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pawPrint: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.pawPrint.length > 0 && this.state.password.length > 0;
  }
	
	
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    console.dir(this.props);
    if(this.state.pawPrint === 'sbc436'){
      this.props.childProps.userHasAuthenticated(true);
    } else {
    }

  }
  

  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="pawPrint" bsSize="large">
            <ControlLabel>PawPrint</ControlLabel>

            <FormControl
              autoFocus
              type="pawPrint"
              value={this.state.pawPrint}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
			value = "Submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
