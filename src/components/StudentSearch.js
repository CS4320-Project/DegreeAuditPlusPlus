import React from "react";
import '../styles/StudentSearch.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";


export default class StudentSearch extends React.Component {

  //gives user a text field to be able to input a student number
	constructor(props) {
    super(props);

    this.state = {
      studentNumber: ""
    };

  }

	  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  //used for quick demo demonstration
	  handleSubmit = event => {
    event.preventDefault();

	  if (this.state.studentNumber === "14261685" ){

			window.location = '/home';

	  }

	  else{
		   alert('The entered student number does not exist ' + this.state.studentNumber );
			   //alerts the user that the information entered is not valid, used for quick demonstration
	  }

  }

  render(){
    //Order for the Student Search Page

    return(
        <div className="StudentSearch">
        <h1 className="heading">Search Student</h1>

		 <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="studentNumber" bsSize="large">

            <FormControl
              autoFocus
              type="studentNumber"
							placeholder="Enter Student Number..."
              value={this.state.studentNumber}
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
