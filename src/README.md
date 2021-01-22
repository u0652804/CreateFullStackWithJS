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
     
	    cd /firstFullStackJS/src/backend_express/bin/www/ 
	    replace 3000 to 5000 in line: var port = normalizePort(process.env.PORT || '3000'); 
	 
