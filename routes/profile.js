var express = require("express");
var router = express.Router();
var passport = require("passport");
var mongoose = require("mongoose");

//LOAD PROFILE, USER,SORE AND PEODUCT MODULES
var User = require("../models/users"),
    Store = require("../models/store"),
    Product = require("../models/products"),
    Profile = require("../models/profile");

//@route GET api/profile/test
//@desc test profile route
//access public
router.get("/test", isLoggedIn, function (req, res) {
    res.json("profile route works");
})

//@route GET api/profile/handle/:handle
//@desc get product by handle
//access public


router.get("/", isLoggedIn, function (req, res) {
    var errors = {};
    Profile.findOne({ user: req.user.id })
        .populate('user')
        .then(profile => {
            if (!profile) {
                errors.noprofile = "There is no profile for this user";
                return res.json(profile);
            }
            res.send(profile);
        })
        .catch(err => res.status(404).json(errors));

})



//@route POST api/profile/
//@desc update and create 
//access private
router.post("/", isLoggedIn, function (req, res) {
    //VALIDATION
    req.checkBody("handle", "Profile handle is required")
        .notEmpty();

    req.checkBody("handle", "Handle needs to be between 2 and 40")
        .isLength({ min: 2, max: 40 });

    req.checkBody("location", 'Location field is required')
        .notEmpty();


    req.check("phone")
        .notEmpty().withMessage("phone is required")
        .isMobilePhone().withMessage('invalid phone number');

    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        var params = [];
        errors.forEach(function (error) {
            messages.push(error.msg);
            params.push(error.param);


        });
        return res.status(400).json(messages);
    }
    //GET FIELDS
    var profileFields = {};
    profileFields.user = req.user.id;
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
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                ).then(profile => res.json(profile));
            }

            else {
                //CREATE

                //CHECK IF HANDLE EXISTS
                Profile.findOne({ handle: profileFields.handle }).then(profile => {
                    if (profile) {
                        errors.handle = 'That handle alread exists';
                        res.status(400).json(errors);
                    }
                    //SAVE PROFILE  
                    new Profile(profileFields).save().then(profile => res.json(profile));
                })
            }
        })


})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("error", "You must be logged in first!");
    res.json("You must be logged in first!");
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




