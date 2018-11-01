import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/LoginForm.css";

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
      window.location = '/home';
    } else if(this.state.pawPrint === 'nbalser') {
      this.props.childProps.userHasAuthenticated(true);
      window.location = '/studentSearch';
    }
	  else {
		  alert('Username or password is incorrect!');
	  }

  }


  render() {
    return (
      <div>

      <div className="jumbotron">
          <div className="container">
          <h1 className="display-4"><span className="yellow">DEGREE<span className="white">AUDIT</span>++</span></h1>
          <p className="lead">An easy way to plan out your remaining semsters at the University of Missouri - Columbia.</p>
        </div>
      </div>

      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="pawPrint" bsSize="large" className="textHover">
            <ControlLabel>PawPrint</ControlLabel>

            <FormControl
              autoFocus
              type="pawPrint"
              value={this.state.pawPrint}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" className="textHover">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button id="loginButton"
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
      </div>
    );
  }
}
