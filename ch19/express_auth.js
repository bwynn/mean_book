var express = require("express");
var basicAuth = require("basic-auth-connect");
var app = express();
app.listen(8080);

app.use(basicAuth(function( user, pass ) {
  return ( user === "testuser" && pass === "test" );
}));

app.get("/", function( req, res ) {
  res.send("Successful Authentication!");
});
