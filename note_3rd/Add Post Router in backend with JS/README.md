# Add Post Router in backend with JS

1. Add a post router 

2. parsing json bodies

3. response json data

### References 
References by 

- [Parsing JSON bodies](https://codewithhugo.com/parse-express-json-form-body/)

### Steps
 1. For use JSON type as response body. Please check express version, when using Express >= 4.16.0, otherwise please study how to use 3rd, body-parser
 
 in package.json:
 
        ...
        "express": "~4.16.1",
		...
		
 in app.js, this method will be added

         app.use(express.json());

 2. add and edit testPostAPI.js
 
        var express = require('express');
        var router = express.Router();
        
        // req.body is a JSON type input data
        router.post('/', function (req, res, next) {
            // print input data
            console.log("req.body = " + JSON.stringify(req.body));
            // process input data to output data
            var rst = {};
            rst.p1 = "Hello " + req.body.p1;
            rst.p2 = "Hello " + req.body.p2;
            // response output data is JSON type 
            res.send(rst);
        });
        
        module.exports = router;
		
 3. [call this post router in React]()