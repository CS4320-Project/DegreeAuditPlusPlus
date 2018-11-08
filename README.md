# DegreeAuditPlusPlus
The site is hosted [here](http://ec2-52-14-173-245.us-east-2.compute.amazonaws.com:3000)

## Starting the development environment

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
