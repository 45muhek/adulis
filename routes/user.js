const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const keys = require("../config/keys");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

/* //AUTHENTTICATED ROUTES
router.get("/logout", isLoggedIn, function(req, res) {
  req.logout();
  res.redirect("/");
});
router.get("/profile", isLoggedIn, function(req, res) {
  res.send("signed ul!=");
});

router.use("/", isNotLoggedIn, function(req, res, next) {
  next();
}); */
//AN-AUTHENTHICATED ROUTES

//login logic
/* router.get("/login", function(req, res) {
  var messages = req.flash("error");
  res.render("user/login", {
    csrfTooken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
}); */
router.post("/login", (req, res) => {
  console.log("wsaa " + req.body);
  const { errors, isValid } = validateLoginInput(req.body);
  //CHECK VALIDATION
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      console.log(err);
      return done(err);
    }
    if (!user) {
      errors.email = "User not found";
      return res.status(400).json(errors);
    }
    if (!user.validPassword(password)) {
      errors.password = "Wrong password";
      return res.status(400).json(errors);
    }

    //SIGN TOOKEN
    //SETTING THE USERS STATUS TO ONLINE
    User.findByIdAndUpdate(user.id).then(user => {
      user.isOnline = true;
      user.save();
    });

    //USER FOUND
    const payload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname
    };

    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: 180 * 60 * 1000 },
      (err, token) => {
        if (err) console.log(err);

        res.json({
          success: true,
          token: "Bearer " + token
        });
      }
    );
  });
});
router.get(
  "/current",
  passport.authenticate("jwt", { sessison: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      email: req.user.firstname
    });
  }
);
//logout route

//add user
router.get("/register", function(req, res) {
  var messages = req.flash("error");
  res.render("user/register", {
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //CHECK VALIDATION
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email is already in use";
      return res.status(400).json(errors);
    } else {
      var newUser = new User();
      newUser.firstname = req.body.firstname;
      newUser.lastname = req.body.lastname;
      newUser.email = req.body.email;
      newUser.password = newUser.encryptPassword(req.body.password);

      //REGISTER THE NEW USER
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

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
