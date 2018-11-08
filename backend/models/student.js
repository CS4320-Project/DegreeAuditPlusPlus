var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Course = new Schema({
  courseNumber: String,
  courseTitle: String,
  completed: String,
  gradeReceived: String,
  credit: Number
});

var StudentSchema = new Schema({
  pawPrint: String,
  userType: String,
  firstName: String,
  lastName: String,
  degreeProgram: String,
  degreeMinor: String,
  expectedGradDate: String,
  studentNumber: Number,
  advisor: String,
  courses: [Course],
});

module.exports = mongoose.model('Student', StudentSchema);
