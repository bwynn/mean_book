var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost/", function( err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function( err, nebulae ) {
    nebulae.findOne({type: "Super Nova"}, function( err, item ) {
      console.log("Before save: ");
      console.log(item);
      item.info = "Some new info";
      nebulae.save(item, {w:1}, function( err, results ) {
        nebulae.findOne({ _id: item._id }, function( err, savedItem ) {
          console.log("After Save: ");
          console.log(savedItem);
          db.close();
        })
      })
    })
  })
})
