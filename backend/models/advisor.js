var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdvisorSchema = new Schema({
  pawPrint: String,
  userType: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Advisor', AdvisorSchema);
