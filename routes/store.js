var express = require("express");
var router = express.Router();

var Product = require("../models/products"),
  Users = require("../models/users");
Store = require("../models/store");

//@route GET store/
//@desc  test store route
//access public
router.get("/", (req, res) => {
  Store.findOne({ user: req.user.id }).then(store => {
    if (store) {
       res.json(sotre);
    }
});
})
//@route GET api/store
//@desc  add new store
//access private
router.post("/", (req, res) => {
  //VALIDATION
  req.checkBody("name", "name field is required").notEmpty();
  req.checkBody("expired", "name field is required").notEmpty();
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

  //GET FIELDS
  const storeFields = {};

  if (req.body.name) storeFields.name = req.body.name;
  if (req.body.location) storeFields.location = req.body.location;
  if (req.body.bio) storeFields.bio = req.body.bio;
  if (req.body.description) storeFields.description = req.body.description;
  if (req.body.expired) storeFields.expired = req.body.expired;

  //PAYMENT METHODS
  if (typeof req.body.payments != "undefined") {
    storeFields.paymentsupport = req.body.payments.split(",");
  }
  //ASSIGNED USERS FOR THIS STORE
  if (typeof req.body.uid != "undefined") {
    storeFields.user = req.body.uid.split(",");
  }
  //ASSIGNED CATAGORIES BY ADMIN
  if (typeof req.body.assignedcatagory != "undefined") {
    storeFields.assignedcatagory = req.body.assignedcatagory.split(",");
  }
  storeFields.contacts={}
  if (req.body.phone) storeFields.contacts.phone = req.body.phone;
  if (req.body.facebook) storeFields.contacts.facebook = req.body.facebook;
  if (req.body.email) storeFields.contacts.email = req.body.email;
  if (req.body.twitter) storeFields.contacts.twitter = req.body.twitter;
  if (req.body.website) storeFields.website = req.body.website;

  Store.create(storeFields, (err, store) => {
    if (err) {
      console.log(err);
    } else {
      res.json(store);
    }
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
