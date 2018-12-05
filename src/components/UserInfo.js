import React from 'react';
import "../styles/UserInfo.css";

export default class UserInfo extends React.Component {

  componentDidMount(){
    fetch('/api/advisors', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pawprint: this.props.student.advisor
      })
    })
      .then(res => res.json())
      .then(res => {
        if(res.error){
          console.log("error: ", res.error);
        } else {
          this.setState({advisor: res});
        }
      });
  }
	 semesterLeft(){
		document.getElementById("semester").innerHTML= "Change Text"
	}

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
    {/*Heading for the Home page, and collapse information.*/}
        <button className="button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        STUDENT INFORMATION +
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <div className="container">
              <div className="row">

                  {/*calls all the information for a student determined by the App.js file*/}
                <div className="col-sm-4">
                  <h2 className="format"><b>Name</b></h2>
                  <h4>{this.props.student.firstName} {this.props.student.lastName}</h4>
                  <h2 className="format"><b>Degree Program, Major</b></h2>
                  <h4>{this.props.student.degreeProgram}</h4>
                  {this.state && this.state.advisor &&
                    <React.Fragment>
                      <h2 className="format"><b>Advisor</b></h2>
                      <h4>{this.state.advisor.firstName} {this.state.advisor.lastName}</h4>
                    </React.Fragment>
                  }
                </div>

                  {/*calls all the information for a student determined by the App.js file*/}
                <div className="col-sm-4">
                  <h2 className="format"><b>Email</b></h2>
                  <h4>{this.props.student.pawPrint}@mail.missouri.edu</h4>
                  <h2 className="format"><b>Degree Program, Minor</b></h2>
                  <h4>{this.props.student.degreeMinor}</h4>
                  {this.state && this.state.advisor &&
                    <React.Fragment>
                      <h2 className="format"><b>Advisor Email</b></h2>
                      <h4>{this.state.advisor.pawPrint}@missouri.edu</h4>
		
		
		
                    </React.Fragment>
                  }
                </div>

                {/*calls all the information for a student determined by the App.js file*/}
                <div className="col-sm-4">
                  <h2 className="format"><b>Student Number</b></h2>
                  <h4>{this.props.student.studentNumber}</h4>
                  <h2 className="format"><b>Expected Graduation Day</b></h2>
                  <h4>{gradDate}</h4>
                  {this.state && this.state.advisor &&
                    <React.Fragment>
                      <h2 className="format"><b>Advisor Phone Number</b></h2>
                      <h4>{this.state.advisor.phone}</h4>
                    </React.Fragment>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
