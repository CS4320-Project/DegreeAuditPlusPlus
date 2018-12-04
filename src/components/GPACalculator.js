import React from 'react';
import "../styles/GPACalculator.css";

export default class GPACalculator extends React.Component {

  render() {
    return (
      <div>
        <button className="button" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
        GPA CALCULATOR +
        </button>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <div className="container">
              <div className="row">


              <form action="" method="post">

                  <table id="gpa-calc">
                  <caption>Enter the course credit hours and the anticipated&nbsp;grade.</caption>
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
                                  <td className="border"><select id="grade_1" name="grade_1">
                                      <option selected="selected" value=""> </option>
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
                                  <td className="border"><label htmlFor="hours_2">Class 2:</label></td>
                                  <td className="border"><input id="hours_2" name="hours_2" size="8" type="text"></input></td>
                                  <td className="border"><select id="grade_2" name="grade_2">
                                      <option selected="selected" value=""> </option>
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
                                  <td className="border"><label htmlFor="hours_3">Class 3:</label></td>
                                  <td className="border"><input id="hours_3" name="hours_3" size="8" type="text"></input></td>
                                  <td className="border"><select id="grade_3" name="grade_3">
                                      <option selected="selected" value=""> </option>
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
                                      <option selected="selected" value=""> </option>
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
                                      <option selected="selected" value=""> </option>
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
                                      <option selected="selected" value=""> </option>
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
                                      <option selected="selected" value=""> </option>
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
                                      <option selected="selected" value=""> </option>
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

                      <p>Previous GPA: (e.g. 2.235 or 3)
                          <input id="prevGPA" name="prevGPA" size="10" type="text"></input>
                      </p>
                      <p>Previous GPA hours attempted: (e.g. 10.5 or 10)
                          <input id="prevHours" name="prevHours" size="10" type="text"></input>
                      </p>

                      <p><input className="button" id="sbmtCalcGPA" name="sbmtCalcGPA" onclick="return calcTotals();" type="button" value="Calculate GPA"></input></p>

                      <div className="error-message" id="errmsgs-container" styles="display:none;">&nbsp;</div>
                  </form>
                  <div className="like-blockquote" id="results-container" styles="background-image: none; background-color: rgb(252, 241, 212);">
                    <h2>Results</h2>
                    Total points:
                        <span id="pointTotal" name="pointTotal"></span>
                    <br></br>
                    Total hours:
                        <span id="hourTotal" name="hourTotal"></span>
                    <br></br>
                    Semester GPA:
                        <span id="semesterGPA" name="semesterGPA"></span>
                    <br></br>
                   Overall GPA:
                        <span id="overallGPA" name="overallGPA"></span>
                    <br></br>
      <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
