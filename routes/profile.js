var express = require("express");
var router = express.Router();
var passport = require("passport");

//LOAD PROFILE, USER,SORE AND PEODUCT MODULES
var User = require("../models/users"),
    Store = require("../models/store"),
    Product = require("../models/products"),
    Profile = require("../models/profile");

//@route GET api/profile/test
//@desc test profile route
//access public
router.get("/test", isLoggedIn, function (req, res) {
    res.send(req.user.id);
})

//@route GET api/profile
//@desc view user profile
//access private
router.get("/", isLoggedIn, function (req, res) {
    var errors = {};
    Profile.findOne({ user: req.user.id }).then(profile => {
        if (!profile) {
            errors.noprofile = "There is no profile for this user";
            return res.send(errors);
        }
        res.send(profile);
    })
        .catch(err => res.status(404));

})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("error", "You must be logged in first!");
    res.redirect("/");
}

//@route POST api/profile/
//@desc update and create 
//access private
router.post("/", isLoggedIn, function (req, res) {
    //GET FIELDS
    var profileFields = {};
    profileFields.user = req.body.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.phone) profileFields.phone = req.body.phone;
    //interests
    if (typeof req.body.interests != 'undefined') {
        profileFields.interests = req.body.interests.split(',');
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (profile) {
                //UPDATE
                Profile.findOneAndUpdate({ user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                ).then(profile => res.send(profile));
            }
            else {
                //CREATE

                //CHECK IF HANDLE EXISTS
                Profile.findOne({ handle: profileFields.handle }).then(Profile => {
                    if (profile) {
                        errors.handle = 'That handle alread exists';
                        res.send(errors);
                    }
                    //SAVE PROFILE  
                    new Profile(profileFields).save().then(profile => res.send(profile));
                })
            }
        })


})

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




