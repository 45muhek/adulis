var express = require("express");
var router = express.Router();
var passport = require("passport");
User = require("../models/users");
var csurf = require("csurf");

var csurfProtection = csurf();
router.use(csurfProtection);

//AUTHENTTICATED ROUTES
router.get("/logout",isLoggedIn, function(req, res) {
    req.logout();
    res.redirect("/");
  });
router.get("/profile", isLoggedIn, function(req, res) {
  res.send("signed ul!=");
});

router.use("/", isNotLoggedIn, function(req, res, next) {
  next();
});
//AN-AUTHENTHICATED ROUTES

//login logic
router.get("/login", function(req, res) {
  var messages = req.flash("error");
  res.render("user/login", {
    csrfTooken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});
router.post(
  "/login",
  passport.authenticate("local.signin", {
    successRedirect: "/productcatalogue",
    failureRedirect: "/user/register",
    failureFlash: true
  })
);

//logout route


//add user
router.get("/register", function(req, res) {
  var messages = req.flash("error");
  res.render("user/register", {
    csrfTooken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post(
  "/register",
  passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
  }) 
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}

function isNotLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You can not access this page");
  res.redirect("/");
}
module.exports = router;
