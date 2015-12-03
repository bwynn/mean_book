var express = require("express");
var app = express();
app.listen(80);
app.get("/user/:userid", function( req, res ) {
  //console.log("URL:\t " + req.originalUrl);
  
});
