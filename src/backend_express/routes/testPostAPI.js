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