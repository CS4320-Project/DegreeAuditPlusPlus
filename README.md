# DegreeAuditPlusPlus
The site is hosted [here](http://ec2-52-14-173-245.us-east-2.compute.amazonaws.com:3000)

### Sara Caponi, Jamie Flores, Daniel Jaegers, Derek Rogers, Erika Eckfeld, Kate Gardner, Sohaila Bakr


## How to Run Our Program As a Student

1. In order to run and use our program, open [****DegreeAuditPlusPlus****](HTTPS://TINYURL.COM/YC2JQ4SW)

2. Enter the ****username: sbc436**** and then the ****password: abc123****

3. Click Login and then the student info will be displayed.

  

## How to Run Our Program As a Advisor

1. In order to run and use our program, open [****DegreeAuditPlusPlus****](HTTPS://TINYURL.COM/YC2JQ4SW)

2. Enter the ****username: balsern**** and then the ****password: tigers1****

3. Click login and then input ****pawPrint: sbc436 or pdokdf**** under the student search section

34. Click Search and then the student info will be displayed. 

## How to Run Our Program Locally

1.  Clone our repository with 
```
git clone https://github.com/CS4320-Project/DegreeAuditPlusPlus.git
```

### Starting the development environment

Make sure all the dependencies are installed by running

```
npm i
cd backend
npm i
cd ..
```

If you encounter errors, you may need to remove the `node_modules` folders with

```
rm -r node_modules
rm -r backend/node_modules
```

Then freshly run the `npm i` commands.

Once everything is installed, start the backend by running
```
node backend/server.js
```

Keep this terminal window open! Open a new window and start the React app with

```
npm start
```

## Additions Since Demo 1
#### Since Demo1 we have implemented significant changes in our code:
1. Our most significant change is the addition of GPACalculator.js. This code creates a GPA component  that allows the user to import their possible grades for their current semester and view how they will alter their overall GPA. The number of previous hours the student has taken and their previous GPA is already pre-populated so the student does not have to enter it or look it up on another site. 

2.  Next, our addition of Chart.js allows the user to visually see their degree progress. The dynamic Donut chart changes as the user progresses through their degree. This addition improves our user experience as well as shows the user important information. 

3.  We also made significant additions to our backend by adding more classes and more students. 
4. Our user interface was improved and simplified since Demo 1. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5Njc2MzY3OTAsNzY5NzExMjQ0LC01ND
I0NzA5NzMsNzMwOTk4MTE2XX0=
-->
