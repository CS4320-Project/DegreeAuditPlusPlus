# DegreeAuditPlusPlus
##### Sara Caponi, Jamie Flores, Daniel Jaegers, Derek Rogers, Erika Eckfeld, Kate Gardner, Sohaila Bakr

The site is hosted [here](http://ec2-3-16-186-191.us-east-2.compute.amazonaws.com:3000)


## How to Run Our Program As a Student

1. In order to run and use our program, open [****DegreeAuditPlusPlus****](http://ec2-3-16-186-191.us-east-2.compute.amazonaws.com:3000)

2. Enter the ****username: sbc436**** and then the ****password: abc123****

3. Click Login and then the student info will be displayed.

  

## How to Run Our Program As a Advisor

1. In order to run and use our program, open [****DegreeAuditPlusPlus****](http://ec2-3-16-186-191.us-east-2.compute.amazonaws.com:3000)

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
