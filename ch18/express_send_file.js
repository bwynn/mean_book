var express = require("express");
var url = require("url");
var app = express();
app.listen(8080);
app.get("/image", function( req, res ) {
  res.sendfile("homer.png",
    { maxAge: 1, // 24 * 60 * 60 * 1000
      root: "../img/"
    },
    function( err ) {
      if ( err ) {
        console.log("Error");
      }
      else {
        console.log("Success");
      }
    });
});
