import React from "react";
import UserInfo from './UserInfo';
import GPACalculator from './GPACalculator';
import Tab from './Tab';
import Chart from './Chart';

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
	 var semesterLeft
	 var hoursTaken =0;
	 var currentHours=0;
	 var hoursReq = 126;
	 var hoursRemaining;
	  var studentName=this.props.student.firstName
	console.dir(this.props.student.courses);

	this.props.student.courses.forEach((course) => {
		console.dir(course);
		if (course.completed == 'past')
		  hoursTaken+= course.credit;

		if(course.completed == 'current')
		  currentHours+= course.credit;
	});

	  semesterLeft = Math.ceil((hoursReq-(hoursTaken+currentHours))/15);
	  hoursRemaining= 126-(currentHours+hoursTaken);



    return(
      <div>
        { this.props && this.props.student &&
          <React.Fragment>
    <div className="DonutDiv">
		 <Chart hoursTaken={hoursTaken} currentHours={currentHours} hoursRemaining={hoursRemaining} semesterLeft={semesterLeft} studentName={studentName} />
		</div>
		<div className="InfoDiv">
            <UserInfo student={this.props.student} />
            <GPACalculator/>
		</div>


            <Tab student={this.props.student}/>

          </React.Fragment>
        }
      </div>
    );
  }
}
