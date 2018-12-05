const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3001;

/* * * * DB CONFIG * * * */
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:seng123@cluster0-shard-00-00-aown7.mongodb.net:27017,cluster0-shard-00-01-aown7.mongodb.net:27017,cluster0-shard-00-02-aown7.mongodb.net:27017/degree-audit?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("DB connectted");
});

var User    = require('./models/user');
var Student = require('./models/student');
var Advisor = require('./models/advisor');

/* * * * * API ROUTES * * * * * */
const router = express.Router();

// This function is called every time a request is made
//  it can be used for debugging/logging purposes
router.use(function(req, res, next) {
  next();
});

router.route('/students')
  .post(function(req, res){
    Student.findOne({
      'pawPrint': req.body.pawprint
    }, (err, student) => {
      if(err){
        console.log("error: ", err);
        res.json({error: err});
      } else {
        res.json(student);
      }
    });
  });

router.route('/advisors')
  .post(function(req, res){
    let pawPrint = req.body.pawprint;
    Advisor.findOne({
      'pawPrint': pawPrint
    }, (err, advisor) => {
      if(err){
        console.log("error: ", err);
        res.json({error: err});
      } else {
        res.json(advisor);
      }
    });
  });

router.route('/login')
  .post(function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({
      'pawPrint': username,
      'password': password
    }, (err, user) => {
      if(err){
        console.log("error: ", err);
        res.json({error: err});
      } else {
        if(user && user.userType === 'student'){
          Student.findOne({
            'pawPrint': user.pawPrint
          }, (err, student) => {
            if(err){
              console.log("error: ", err);
              res.json({error: err});
            } else {
              res.json(student);
            }
          })
        } else {
          res.json(user);
        }
      }
    });
  });


// prefix all routes with /api
app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port + "...");
