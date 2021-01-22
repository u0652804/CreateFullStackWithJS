# CreateFullStackWithJS
Create a react full stack and a Express backend and connect them. 

### References 
References by [How to create a React frontend and a Node/Express backend and connect them by João Henrique](https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c).

### Steps
 1. donwload & install : 
 
     node : https://nodejs.org/en/
 
 2. Create folder of project 
 
        mkdir firstFullStackJS
        cd firstFullStackJS
        mkdir src 
	    cd src
	

 3. Create a React App
 
        cd firstFullStackJS
        npx create-react-app react_full_stack
        cd react_full_stack
        // fix to update old react-scripts to v2.1.8
        npm install react-scripts@2.1.8 
        npm start
        //demo: browser : http://localhost:3000/
        //ps: 
	    // 1. react_full_stack is name of react project folder
	    // 2. 'ctrl + c' to stop server

 4. Create an Express App
 
        cd firstFullStackJS
        npx express-generator backend_express
        cd backend_express
        npm install
        npm start
        //demo: browser : http://localhost:3000/
        //ps: 
	    // 1. backend_express is name of express project folder
	    // 2. can't start both React and Express on same time
	 
 5. Change port of Express App for starting two Apps on same time
     
	    edit file /firstFullStackJS/src/backend_express/bin/www/ 
	    replace 3000 to 5000 in line: var port = normalizePort(process.env.PORT || '3000'); 
	 
 6. Configuring a new route in the Express API
 
     - Add and edit new file testAPI.js in /backend_express/routes
     
     - testAPI.js
     
           var express = require('express');
	
           var router = express.Router();
           router.get('/', function(req, res, next) {
               //service logic
               res.send("test API");
           });
	
           module.exports = router;


     - app.js
     
           var apiRouter = require('./routes/testAPI');
	   
           app.use('/testapi', apiRouter);
	   
           // test http://localhost:5000/testapi
	   
7. Add CORS in Express backend for support react front-end to access API because of both are on different port

      - npm install --save cors
      
      - edit app.js
      
            var cors = require("cors");
	   
            app.use(cors());
	    
8. Edit App.js of React to test access api from backend
      
      - edit App.js

            import logo from './logo.svg';
		import './App.css';

		import React, { Component } from "react";

		class App extends Component{

		  constructor(props) {
		    super(props);
		    this.state = { apiResponse: "" };
		  }

		  callAPI() {
		      fetch("http://localhost:5000/testapi")
			  .then(res => res.text())
			  .then(res => this.setState({ apiResponse: res }));
		  }

		  componentWillMount() {
		      this.callAPI();
		  }

		  render() {
		    return(
		      <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <p className="App-intro">{this.state.apiResponse}</p>
			</header>
		      </div>
		    );
		  }
		}

		export default App;
	   
	   
