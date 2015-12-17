var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/comments");
require("./models/comments_model.js");
require("./models/photo_model.js");
require("./models/page_model.js");
var CommentThread = mongoose.model("CommentThread");
var Reply = mongoose.model("Reply");
var Photo = mongoose.model("Photo");
var Page = mongoose.model("Page");
function addPhoto(title, filename) {
  var comment = new CommentThread({title: title + " Comments"});
  comment.save(function(err, comment) {
    var photo = new Photo({title: title, filename: filename});
    //photo.commentId = comment._id;
    photo.save(function() {
      console.log(title + " Saved");
    });
  });
}
CommentThread.remove().exec(function() {
  Photo.remove().exec(function() {
    Page.remove().exec(function() {
      var comment = new CommentThread({title: "Photo Page Comments"});
      comment.save(function(err, comment) {
        var page = new Page({name: "Photos Page"});
        //page.commentId = comment._id;
        page.save();
      });
      addPhoto("Homer", "homer.png");
      addPhoto("Seven Sisters", "sevensisters.jpg");
    });
  });
});
