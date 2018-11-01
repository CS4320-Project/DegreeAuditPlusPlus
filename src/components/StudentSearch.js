import React from "react";
import '../styles/StudentSearch.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";


export default class StudentSearch extends React.Component {

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


	  handleSubmit = event => {
    event.preventDefault();

	  if (this.state.studentNumber === "14261685" ){
			window.location = '/home';
	  }

	  else{
		   alert('The entered student number does not exist ' + this.state.studentNumber );
	  }

  }




  render(){
    return(


        <div className="StudentSearch">
        <h1>Search Student</h1>

		 <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="studentNumber" bsSize="large">


            <FormControl
              autoFocus
              type="studentNumber"
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
