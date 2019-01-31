var express = require("express");
var router = express.Router();

var Product = require("../models/products"),
  Users = require("../models/users");
Store = require("../models/store");

//@route GET api/store/
//@desc  test store route
//access public
router.get("/", (req, res) => {
  res.json("store works");
});
//@route GET api/store
//@desc  add new store
//access private
router.post("/", (req, res) => {
  //VALIDATION
  req.checkBody("name", "name field is required").notEmpty();
  req.checkBody("expired", "name field is required").notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    var params = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
      params.push(error.param);
    });
    return res.status(400).json(messages);
  }

  //GET FIELDS
  const storeFields = {};

  if (req.body.name) storeFields.name = req.body.name;
  if (req.body.location) storeFields.location = req.body.location;
  if (req.body.bio) storeFields.bio = req.body.bio;
  if (req.body.description) storeFields.description = req.body.description;
  if (req.body.website) storeFields.website = req.body.website;
  if (req.body.expired) storeFields.expired = req.body.expired;

  Store.create(storeFields, (err, store) => {
    if (err) {
      console.log(err);
    } else {
      res.json(store);
    }
  });
});

//@route GET api/store/profile
//@desc  store profile associated with user and assigned catagory
//access private
router.post("/profile/:id", (req, res) => {
  //VALIDATION
  req.checkBody("uid", "users field is required").notEmpty();
  req
    .checkBody("assignedcatagory", "Assigned catagorry is required")
    .notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    var params = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
      params.push(error.param);
    });
    return res.status(400).json(messages);
  }

  Store.findOne({ _id: req.params.id }).then(profile => {
    const newProfile = {};
    //ASSIGNED USERS FOR THIS STORE
    if (typeof req.body.uid != "undefined") {
      newProfile.users = req.body.uid.split(",");
    }
    //ASSIGNED CATAGORIES BY ADMIN
    if (typeof req.body.assignedcatagory != "undefined") {
      newProfile.assignedcatagory = req.body.assignedcatagory.split(",");
    }

    profile.assignedcatagory.unshift(newProfile.assignedcatagory);
    profile.user.unshift(newProfile.users);
    profile.save().then(profile => res.json(profile));
  });
});

//@route GET api/store/profile
//@desc  detatch the user from the store (expiration reached - maybe)
//access private
router.delete("/profile/:id", (req, res) => {
  Store.findByIdAndUpdate(req.params.id)
    .then(store => {
      store.user = "";
      store.save();
      res.json(store);
    })
    .catch(err => console.log(err));
});

module.exports = router;
