# Generate UUID
Can use generated uuid to be a private key for database 

### References 
References by 

- [UUID](https://github.com/uuidjs/uuid ) 

### Steps
 1. Install
 
     npm install cors
 
 2. code 
 
        const { v4: uuidv4 } = require('uuid');
		var uuid = uuidv4();
		console.log("uuid = " + uuid);
		//e.g. output: 9b1e46ad-5c41-4461-8469-8bc451437d3a