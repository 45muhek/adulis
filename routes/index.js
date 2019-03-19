var express = require("express");
var router = express.Router();
var passport = require("passport");
User = require("../models/users");

router.get("/", function(req, res) {
  res.render("products/products");
});

//auth using Google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);
//callback route for google to redirect
router.get("/auth/google/redirect", passport.authenticate("google"), function(
  req,
  res
) {
  res.redirect("/");
});

function isLoggedIn(req, res) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}

function isNotLoggedIn(req, res) {
  if (!req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You can not access this page");
  res.redirect("/");
}

module.exports = router;
