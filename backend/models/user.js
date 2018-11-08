var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userType: String,
  pawPrint: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
