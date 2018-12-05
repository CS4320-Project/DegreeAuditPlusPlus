import React from "react";
import '../styles/StudentSearch.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default class StudentSearch extends React.Component {

  //gives user a text field to be able to input a student number
	constructor(props) {
    super(props);

    this.state = {
      pawPrint: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
	  event.preventDefault();
		let studentPawPrint = this.state.pawPrint;
		fetch('/api/students', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pawprint: studentPawPrint,
      })
    })
    .then(res => res.json())
    .then(res => {
      if(!res){
        alert("Couldn't find student with pawprint '" + this.state.pawPrint + "'");
      } else {
        this.props.childProps.userHasAuthenticated(true, res);
        window.location = '/home';
      }
    });
  }

  render(){
    //Order for the Student Search Page

    return(
        <div className="StudentSearch">
        <h1 className="heading">Search Student</h1>

		 <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="pawPrint" bsSize="large">

            <FormControl
              autoFocus
              type="pawPrint"
							placeholder="Enter Student PawPrint..."
              value={this.state.pawPrint}
              onChange={this.handleChange}
            />
                 </FormGroup>
		<Button
            block
            bsSize="large"
            type="submit"
			value = "Submit"
          >
           Search
          </Button>

        </form>



	</div>




    );
  }
}
