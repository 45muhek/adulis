var express = require("express");
var router = express.Router();
var passport = require("passport");
User = require("../models/users");
var csurf = require("csurf");

var csurfProtection = csurf();
router.use(csurfProtection);

router.get("/", function(req, res) {
  res.render("products/products");
});

//login logic
router.get("/user/login", function(req, res) {
  res.render("user/login");
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  }),
  function(req, res) {}
);

function isLoggedIn(req, res) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}

//logout route
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/");
});

//add user
router.get("/user/register", function(req, res) {
  res.render("user/register", { csrfTooken: req.csrfToken() });
});

router.post(
  "/user/register",
  passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
  })
);

router.get("/user/profile", function(req, res) {
  res.send("signed ul!=");
});

module.exports = router;
