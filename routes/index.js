var express= require("express");
var router= express.Router();
var passport = require("passport");
User = require("../models/users");

router.get("/", function (req, res) {
    res.render("products/products");
});

//login logic
router.get("/login", function (req, res) {
    res.render("user/login");
})
router.post("/login", passport.authenticate("local", {

    successRedirect: "/",
    failureRedirect: "/"
}), function (req, res) {


})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("error", "You must be logged in first!")
    res.redirect("/");
}

//logout route
router.get("/logout", function (req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
})

//add user
router.get("/register", isLoggedIn, function (req, res) {

    res.render("register");

})

module.exports=router;