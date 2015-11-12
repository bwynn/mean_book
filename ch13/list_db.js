var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost/admin", function(err, db) {
  var adminDB = db.admin();
  adminDB.listDatabases(function(err, databases) {
    console.log("Before Add Database List: ");
    console.log(databases);
  });
});
