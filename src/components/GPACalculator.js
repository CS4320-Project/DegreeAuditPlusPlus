import React from 'react';
import "../styles/GPACalculator.css";

export default class GPACalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      totalPoints: null,
      totalHours: null,
      semesterGPA: null,
      overallGPA: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    let hours  = [];
    let grades = [];
    let prevGPA = 0;
    let prevHours = 0;

    for(let pair of data.entries()){
      if(pair[0].includes('hours_') && pair[1] !== ''){
        hours.push(parseFloat(pair[1]));
      } else if(pair[0].includes('grade_') && pair[1] !== ''){
        grades.push(parseFloat(pair[1]));
      } else if(pair[0].includes('prevGPA') && pair[1] !== ''){
        prevGPA += parseFloat(pair[1]);
      } else if(pair[0].includes('prevHours') && pair[1] !== ''){
        prevHours += parseFloat(pair[1]);
      }
    }

    let currentHours = hours === undefined || hours.length < 1 ? 0 : hours.reduce((a,b) => a + b) ;
    let currentPoints = 0;
    for(let i = 0; i < grades.length; i++){
      currentPoints += (grades[i] * hours[i]);
    }
    let prevPoints = prevGPA * prevHours;
    let semesterGPA = currentPoints / currentHours;
    let overallGPA = (currentPoints + prevPoints)/(prevHours + currentHours);

    this.setState({
      totalPoints: currentPoints + prevPoints,
      totalHours: currentHours + prevHours,
      semesterGPA: semesterGPA.toFixed(3),
      overallGPA: overallGPA.toFixed(3)
    });
  }

  render() {
    const { totalPoints, totalHours, semesterGPA, overallGPA } = this.state;
    return (
      <div>
        <button className="button" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
        GPA CALCULATOR +
        </button>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <div className="container">
              <div className="row">
                <form onSubmit={this.handleSubmit} method="post">
                  <table id="gpa-calc">
                    <caption>Enter the course credit hours and the anticipated grade.</caption>
                      <thead>
                        <tr>
                          <th className="border">&nbsp;</th>
                          <th className="border">Hours:</th>
                          <th className="border">Grade:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="stripe">
                          <td className="border"><label htmlFor="hours_1">Class 1:</label></td>
                          <td className="border"><input id="hours_1" name="hours_1" size="8" type="text"></input></td>
                          <td className="border">
                            <select id="grade_1" name="grade_1">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="border"><label htmlFor="hours_2">Class 2:</label></td>
                          <td className="border"><input id="hours_2" name="hours_2" size="8" type="text"></input></td>
                          <td className="border">
                            <select id="grade_2" name="grade_2">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                            </select>
                          </td>
                        </tr>
                        <tr className="stripe">
                          <td className="border"><label htmlFor="hours_3">Class 3:</label></td>
                          <td className="border"><input id="hours_3" name="hours_3" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_3" name="grade_3">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                          </select></td>
                      </tr>
                      <tr>
                          <td className="border"><label htmlFor="hours_4">Class 4:</label></td>
                          <td className="border"><input id="hours_4" name="hours_4" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_4" name="grade_4">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                          </select></td>
                        </tr>
                        <tr className="stripe">
                          <td className="border"><label htmlFor="hours_5">Class 5:</label></td>
                          <td className="border"><input id="hours_5" name="hours_5" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_5" name="grade_5">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                          </select></td>
                        </tr>
                        <tr>
                          <td className="border"><label htmlFor="hours_6">Class 6:</label></td>
                          <td className="border"><input id="hours_6" name="hours_6" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_6" name="grade_6">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                                </select></td>
                        </tr>
                        <tr className="stripe">
                          <td className="border"><label htmlFor="hours_7">Class 7:</label></td>
                          <td className="border"><input id="hours_7" name="hours_7" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_7" name="grade_7">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                                    <option value="0">F</option>
                                </select></td>
                        </tr>
                        <tr>
                          <td className="border"><label htmlFor="hours_8">Class 8:</label></td>
                          <td className="border"><input id="hours_8" name="hours_8" size="8" type="text"></input></td>
                          <td className="border"><select id="grade_8" name="grade_8">
                              <option  value=""> </option>
                              <option value="4.0">A+</option>
                              <option value="4.0">A</option>
                              <option value="3.7">A-</option>
                              <option value="3.3">B+</option>
                              <option value="3.0">B</option>
                              <option value="2.7">B-</option>
                              <option value="2.3">C+</option>
                              <option value="2.0">C</option>
                              <option value="1.7">C-</option>
                              <option value="1.3">D+</option>
                              <option value="1.0">D</option>
                              <option value="0.7">D-</option>
                              <option value="0">F</option>
                                  </select></td>
                          </tr>
                      </tbody>
                  </table>

                  <p className="previous">Previous GPA: (e.g. 2.235 or 3)
                      <input id="prevGPA" name="prevGPA" size="10" type="text" className="in"></input>
                  </p>
                  <p className="previous">Previous GPA hours attempted: (e.g. 10.5 or 10)
                      <input id="prevHours" name="prevHours" size="10" type="text" className="in"></input>
                  </p>
                    <button className="button" onSubmit={this.handleSubmit} type="submit" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                        Calculate GPA +
                    </button>
                    {this.state.overallGPA !== null ?
                      (<div className="card card-body">
                        <div className="container">
                        <div className="row">
                        <div className="like-blockquote" id="results-container" styles="background-image: none; background-color: rgb(252, 241, 212);">
                        <h2>Results</h2>
                        <ul>
                          <li>Total points: {totalPoints}</li>
                          <li>Total hours: {totalHours}</li>
                          <li>Semester GPA: {semesterGPA}</li>
                          <li>Overall GPA: {overallGPA}</li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        </div>) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
