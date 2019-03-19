var express = require("express");
var router = express.Router();
var Product = require("../../models/products"),
  Comment = require("../../models/comments"),
  Cart = require("../../models/cart"),
  User = require("../../models/users");

//@route GET route/adminControl/all-users
//@desc view all users
//access private (admin)
router.get("/all-users", (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});
//@route GET route/adminControl/update-to-manager
//@desc update a customer or downgrade an admin to a product manager
//access private (admin)
router.post("/update-to-manager/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id).then(user => {
    if (user.role == "pmanager")
      res.status(404).json("already a product manager");
    user.role = "pmanager";
    user.save();
    res.json(" is added to product managers list");
  });
});
//@route GET route/adminControl/all-users
//@desc view all users
//access private (admin)
router.post("/update-to-admin/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id).then(user => {
    if (user.role == "admin") res.status(404).json("already an administrator");
    user.role = "admin";
    user.save();
    res.json(" is added to adminstrator list");
  });
});
//@route GET route/adminControl/all-users
//@desc view all users
//access private (admin)
router.post("/update-to-customer/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id).then(user => {
    if (user.role == "customer") res.status(404).json("already a customer");
    user.role = "customer";
    user.save();
    res.json(" is added to customers list");
  });
});
//@route GET route/adminControl/customers
//@desc view all customers
//access private (admin)
router.get("/customers", (req, res) => {
  User.find({ role: "customer" }).then(users => {
    res.json(users);
  });
});
//@route GET route/adminControl/product-manger
//@desc view all product managers
//access private (admin)
router.get("/product-managers", (req, res) => {
  User.find({ role: "pmanager" }).then(users => {
    res.json(users);
  });
});
//@route GET route/adminControl/transporter
//@desc view all transporters
//access private (admin)
router.get("/transporters", (req, res) => {
  User.find({ role: "transporter" }).then(users => {
    res.json(users);
  });
});
module.exports = router;
