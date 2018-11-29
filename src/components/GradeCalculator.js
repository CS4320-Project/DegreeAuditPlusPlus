import React from 'react';
import "../styles/GradeCalculator.css";

export default class GradeCalculator extends React.Component {

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






  render() {

    /*
     *  Calculates Points, Hours, Semester GPA and Overall GPA
     *
     *  @package GPA_Calculator
     *  @category Registrar
     *  @author Paul Gilzow, Web Communications, University of Missouri
     *  @copyright 2008
     *  @uses prototype.js
     *  @uses scriptaculous.js
     */

    /**
     *  The total number of classes that will be evaluated
     */
    var $classes     		= 8;
    /**
     * id of the element that will display our error messages
     */
    var $errContainerID 	= 'errmsgs-container';
    /**
     * id of the element that will display our calculated results
     */
    var $resultsContainerID = 'results-container';


    var $aryGPAErrors		= new Array();
    var $boolError 			= false;
    var $fltTotalPoints		= 0;
    var $fltTotalHours		= 0;
    var $fltSemesterGPA		= 0;
    var $fltOveralGPA		= 0;


    /**
     *  The main function.  Triggers the error checking, performs the calculations, and displays results
     *  @return boolean false
     */
    function calcTotals(){
      /* First we need to reset our values from any previous calculations */
      $boolError 		= false;
      $fltTotalHours 	= 0;
      $fltTotalPoints = 0;
      $fltSemesterGPA = 0;
      $fltOveralGPA	= 0;
      $aryGPAErrors		= new Array();

      _showErrContainer(false);

      checkForErrors();

      if($boolError){
        _displayErrMsg();
      } else {
        var $fltPreviousPoints 	= $('prevGPA').value * $('prevHours').value;

        $fltSemesterGPA = $fltTotalPoints/$fltTotalHours;
        $fltOveralGPA = (($fltTotalPoints + $fltPreviousPoints)/($fltTotalHours + Number($('prevHours').value)));
        $fltOveralGPA = $fltOveralGPA.toFixed(4);

        $('pointTotal').update($fltTotalPoints.toFixed(2));
        $('hourTotal').update($fltTotalHours);
        $('semesterGPA').update($fltSemesterGPA.toFixed(4));
        $('overallGPA').update($fltOveralGPA);
        new Effect.Highlight($resultsContainerID,{duration:2,startcolor:'#FFCD55',queue:'end'});
      }

      return false;
    }

    /**
     * Checks all applicable inputs and looks for possible errors.  If any are encountered, adds an error message to the aryGPAErrors array
     */
    function checkForErrors(){
      var $prevGPA 	= $('prevGPA');
      var $prevHours 	= $('prevHours');

      if($prevGPA.value != ''){
        if(isNaN($prevGPA.value)){
          $msg = 'The value you have entered for Previous GPA does not appear to be valid.  Please enter a valid number.';
          _addErrorMsg($msg);
        } else if($prevGPA.value > 4){
          $msg = 'Your Previous GPA can not be greater than 4.0.';
          _addErrorMsg($msg);
        }
      } else {
        $prevGPA.value = 0;
      }

      if($prevHours.value != ''){
        if(isNaN($prevHours.value)){
          $msg = 'The value you have entered for Previous Hours does not appear to be valid. Please enter a valid number.';
          _addErrorMsg($msg);
        }
      } else {
        $prevHours.value = 0;
      }

      var $i = 1;
      while($i <= $classes){
        $grade 	= $('grade_' + $i);
        $hour 	= $('hours_' + $i);
        if($grade.value == '' && $hour.value != '') {
          $msg = 'You have not selected a grade value for Class ' + $i + '.  In order to calculate the GPA, ' +
          'I\'ll need you to select a grade value.';
          _addErrorMsg($msg);
        } else if($grade.value != '' && $hour.value == '') {
          $msg = 'You have not entered the number of hours for Class ' + $i + '. In order to calculate the GPA, I\'ll need ' +
          'you to enter in the number of hours.';
          _addErrorMsg($msg);
        } else if(isNaN($hour.value)) {
          $msg = 'The number of Hours you have entered for Class ' + $i + ' does not appear to be valid.  Please enter in a ' +
          'valid number.';
          _addErrorMsg($msg);
        } else if (isNaN($grade.value)) { //shouldnt ever happen, but just in case
          $msg = 'The Grade you have selected for Class ' + $i + ' does not appear to be valid.  Please select a Grade '
            + ' from the list.';
            _addErrorMsg($msg);
        } else if($grade.value != '' && $hour.value !='') {
          //at this point, we should have a valid selection for grade, and a valid integer for hours.
          $fltTotalHours = $fltTotalHours + Number($hour.value);
          $fltTotalPoints = $fltTotalPoints + ($grade.value*$hour.value);
        }

        ++$i;
      }
    }

    /**
     * Adds an error message to the aryGPAErrors array
     * @param {String} $strMsg
     * @return void
     */
    function _addErrorMsg($strMsg){
      if(!$boolError){
        $boolError = true;
      }
      $aryGPAErrors.push($strMsg);
    }

    /**
     * Takes each error message in the aryGPAErrors array and places it into a list item inside the error container
     *
     * @return void
     */
    function _displayErrMsg(){
      var errContainer	= $($errContainerID);
      var errIntro 		= new Element('p',{id:'errors-intro'}).update('The following errors were encountered:');
      var errList 		= new Element('ul',{id:'errors-list'});
      var i				= 1;

      errContainer.update('');//empty the container from any previous errors

      errContainer.appendChild(errIntro);
      errContainer.appendChild(errList);

      $aryGPAErrors.each(function(strError){
          var errID = 'error-' + i;
          var errItem = new Element('li',{id:errID}).update(strError);
          errList.appendChild(errItem);
          ++i;
        }
      );

      _showErrContainer(true);
    }

    /**
     * Triggers the BlindUp or BlindDown effects on the error container
     *
     * @param {Boolean} $boolShow
     * @return void
     */
    function _showErrContainer($boolShow){
      if($boolShow){
        new Effect.BlindDown($errContainerID,{queue:'end'});
        } else {
          new Effect.BlindUp($errContainerID,{queue:'front'});
      }
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

        <div className="error-message" id="errmsgs-container" style="display:none;">&#160;</div>
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
