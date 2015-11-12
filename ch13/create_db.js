var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var newDB = db.db("newDB");
  newDB.createCollection("newCollection", function(err, collection) {
    if (!err) {
      console.log("New Database and Collection Created");
    }
  });
});
