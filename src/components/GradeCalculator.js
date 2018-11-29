import React from 'react';
import "../styles/GradeCalculator.css";

export default class GradeCalculator extends React.Component {

  render() {

    let calcTotals = () => {

    }

    return(
      <div>
      <form action="gpa-calculator.php#" method="post">
        <p>Grading Scale Used:
            <select id="gradeScale" name="gradeScale">
                <option value="plus">Standard 4.0 using +/- </option>
            </select></p>

    <table id="gpa-calc">
    <caption>Enter the course credit hours and the anticipated&#160;grade.</caption>
        <thead>
            <tr>
                <th>&#160;</th>
                <th>Hours:</th>
                <th>Grade:</th>
            </tr>
        </thead>
        <tbody>
            <tr className="stripe">
                    <td><label htmlFor="hours_1">Class 1:</label></td>

                    <td><input id="hours_1" name="hours_1" size="8" type="text"/></td>
                    <td><select id="grade_1" name="grade_1">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_2">Class 2:</label></td>

                    <td><input id="hours_2" name="hours_2" size="8" type="text"/></td>
                    <td><select id="grade_2" name="grade_2">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_3">Class 3:</label></td>

                    <td><input id="hours_3" name="hours_3" size="8" type="text"/></td>
                    <td><select id="grade_3" name="grade_3">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_4">Class 4:</label></td>

                    <td><input id="hours_4" name="hours_4" size="8" type="text"/></td>
                    <td><select id="grade_4" name="grade_4">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_5">Class 5:</label></td>

                    <td><input id="hours_5" name="hours_5" size="8" type="text"/></td>
                    <td><select id="grade_5" name="grade_5">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_6">Class 6:</label></td>

                    <td><input id="hours_6" name="hours_6" size="8" type="text"/></td>
                    <td><select id="grade_6" name="grade_6">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_7">Class 7:</label></td>

                    <td><input id="hours_7" name="hours_7" size="8" type="text"/></td>
                    <td><select id="grade_7" name="grade_7">
                        <option value=""> </option>
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
                    <td><label htmlFor="hours_8">Class 8:</label></td>

                    <td><input id="hours_8" name="hours_8" size="8" type="text"/></td>
                    <td><select id="grade_8" name="grade_8">
                        <option value=""> </option>
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
            <input id="prevGPA" name="prevGPA" size="10" type="text"/>
        </p>
        <p>Previous GPA hours attempted: (e.g. 10.5 or 10)
            <input id="prevHours" name="prevHours" size="10" type="text"/>
        </p>



        <p><input className="button" id="sbmtCalcGPA" name="sbmtCalcGPA" onClick={calcTotals()} type="button" value="Calculate GPA"/></p>

        <p><b>Note:</b> <a href="/transcripts-records/">See your transcript</a> or academic profile in <a href="https://myzou.missouri.edu/">myZou</a> for your official GPA.</p>

        <div className="error-message" id="errmsgs-container" style={{display: 'none'}}>&#160;</div>
    </form>

    <div className="like-blockquote" id="results-container">

        <h2>Results</h2>
        <ul>
        <li>Total points:
            <span id="pointTotal" name="pointTotal">&#160;</span>
        </li>
        <li>Total hours:
            <span id="hourTotal" name="hourTotal">&#160;</span>
        </li>
        <li>Semester GPA:
            <span id="semesterGPA" name="semesterGPA">&#160;</span>
        </li>
        <li>Overall GPA:
            <span id="overallGPA" name="overallGPA">&#160;</span>
        </li>
        </ul>
    </div>
    </div>
    );
  }
}
