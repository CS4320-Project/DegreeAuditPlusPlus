var express = require('express');
var router = express.Router();

const USERS = [
  {
    userType: 'student',
    pawPrint: 'sbc436',
    password: 'abc123',
    firstName: 'Sara',
    lastName: 'Caponi',
    degreeProgram: 'Computer Science',
    degreeMinor: 'Mathematics',
    expectedGradDate: 'SP2020',
    studentNumber: 14261685,
    advisor: 'Nicholas Balser',
    advisorEmail: 'BalserN@missouri.edu',
    advisorPhone: '573-882-2845',
    courses:[
      {
        courseNumber: 'CS1050',
        courseTitle: 'Algorithm Design and Programming I',
        completed: 'past',
        gradeReceived: 'A',
        credit: 4,
      },
      {
        courseNumber: 'CS2050',
        courseTitle: 'Algorithm Design and Programming II',
        completed: 'past',
        gradeReceived: 'B-',
        credit: 4,
      },
      {
        courseNumber: 'CS4320',
        courseTitle: 'Software Engineering I',
        completed: 'current',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'CS2830',
        courseTitle: 'Introduction to the Internet, WWW and Multimedia Systems',
        completed: 'past',
        gradeReceived: 'A',
        credit: 3,
      },
      {
        courseNumber: 'CS3330',
        courseTitle: 'Object Oriented Programming',
        completed: 'past',
        gradeReceived: 'A-',
        credit: 3,
      },
      {
        courseNumber: 'CS3050',
        courseTitle: 'Advanced Algorithm Design',
        completed: 'past',
        gradeReceived: 'A',
        credit: 3,
      },
      {
        courseNumber: 'CS4830',
        courseTitle: 'Science and Engineering of the World Wide Web',
        completed: 'outstanding',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'IT4400',
        courseTitle: 'C#/.NET Development',
        completed: 'outstanding',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'IT2610',
        courseTitle: 'Audio/Video I',
        completed: 'current',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'IT1610',
        courseTitle: 'Introduction to Entertainment Media',
        completed: 'current',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'IT2600',
        courseTitle: 'Digital Multimedia',
        completed: 'current',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'CS4970',
        courseTitle: 'Senior Capstone Design I',
        completed: 'outstanding',
        gradeReceived: '-',
        credit: 3,
      },
      {
        courseNumber: 'CS4980',
        courseTitle: 'Senior Capstone Design II',
        completed: 'outstanding',
        gradeReceived: '-',
        credit: 3,
      },
    ]
  },
  {
    userType: 'advisor',
    pawPrint: 'nbalser',
    password: 'tigers1',
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  res.json(USERS);
});

router.get('/:pawprint', function(req, res, next){
  let pawPrint = req.params.pawprint;
  let response = {error: 'no user with pawPrint ' + pawPrint};

  USERS.forEach(user => {
    if(user.pawPrint === pawPrint){
      response = user;
    }
  });

  res.json(response);
});

module.exports = router;
