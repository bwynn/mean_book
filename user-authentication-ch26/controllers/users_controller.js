var crypto = require("crypto");
var mongoose = require("mongoose");
var User = mongoose.model("User");

function hashPW(pwd) {
  return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

exports.signup = function(req, res) {
  var user = new User({username:req.body.username});
  var pwd = user.set('hashed_password', hashPW(req.body.password));
  var email = user.set('email', req.body.email);
  //user.save(); - hack to 'make it work'
  user.save(function(err) {
    console.log(user);
    if (err) {
      console.log(err);
      req.session.error = err;
      res.redirect('/signup');
    }
    else {
      req.session.user = user.id;
      req.session.username = user.username;
      req.session.msg = "Authenticated as " + user.username;
      res.redirect('/');
    }
  });
};

exports.login = function(req, res) {
  User.findOne({username: req.body.username})
    .exec(function(err, user) {
      if (!user) {
        err = "User not found.";
      }
      else if (user.hashed_password === hasPW(req.body.password.toString())) {
        req.session.regenerate(function() {
          req.session.user = user.id;
          req.session.username = user.username;
          req.session.msg = "Authenticated as " + user.username;
          res.redirect('/');
        });
      }
      else {
        err = "Authentication failed";
      }
      if (err) {
        req.session.regenerate(function() {
          req.session.msg = err;
          res.redirect('/login');
        });
      }
    });
};

exports.getUserProfile = function(req, res) {
  User.findOne({_id: req.session.user})
      .exec(function(err, user) {
        if (!user) {
          res.json(404, {err: "User Not Found."});
        }
        else {
          res.json(user);
        }
      });
};

exports.updateUser = function(req, res) {
  User.findOne({_id: req.session.user})
      .exec(function(err, user) {
        user.set('email', req.body.email);
        user.set('color', req.body.color);
        user.save(function() {
          if (err) {
            res.session.error = err;
          }
          else {
            req.session.msg = "User updated";
          }
          res.redirect('/user');
        });
      });
};

exports.deleteUser = function(req, res) {
  User.findOne({_id: req.session.user})
      .exec(function(err, user) {
        if (user) {
          user.remove(function(err) {
            if (err) {
              req.session.msg = err;
            }
            req.session.destroy(function() {
              res.redirect('/login');
            });
          });
        }
        else {
          req.session.msg = "User Not Found!";
          req.session.destroy(function() {
            res.redirect('/login');
          });
        }
      });
};
