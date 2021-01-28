# CORS
Enable all CORS requests 

### References 
References by 

- [CORS](https://expressjs.com/en/resources/middleware/cors.html) 

### Steps
 1. Install
 
     npm install cors
 
 2. code 
 
        var express = require('express')
        var cors = require('cors')//
        var app = express()
    
        app.use(cors())//