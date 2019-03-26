var express = require("express");
var passport = require("passport");
var router = express.Router();
var Order = require("../models/order"),
  User = require("../models/users"),
  Delivery = require("../models/delivery");
const validateCheckoutInput = require("../validation/checkout");

//@route GET api/order
//@desc test order route
//access public
router.get("/", (req, res) => {
  var cart = new Cart(req.session.cart);

  res.render("products/order", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});
//@route GET api/order/view
//@desc view customers own order
//access private(customer)
router.get("/view", passport.authenticate("jwt"), (req, res) => {
  Order.find({ user: req.user }, (err, orders) => {
    if (err) console.log(err);
    else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
      });
      res.json(orders);
    }
  });
});
//@route GET api/order
//@desc test order route
//access public
router.post("/", passport.authenticate("jwt"), (req, res) => {
  //VALIDATION
  const { errors, isValid } = validateCheckoutInput(req.body);
  //CHECK VALIDATION
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //GET FIELDS
  //INITIALIZING

  const orderIssentials = {};
  const isAndroid = false;
  var sessionCart = new Cart(req.session.cart);

  //SETTING CART TO THE ORDER CART
  orderIssentials.cart = sessionCart;
  //SETTING USER TO AN ORDER
  orderIssentials.user = req.user;

  if (req.body.firstname && req.body.lastname)
    orderIssentials.name = req.body.firstname + " " + req.body.lastname;
  if (req.body.companyname) orderIssentials.companyname = req.body.companyname;

  if (req.body.city || req.body.streetname || req.body.housenumber)
    orderIssentials.deliveryadress =
      req.body.city + ", " + req.body.streetname + ", " + req.body.housenumber;

  if (req.body.phone) orderIssentials.phone = req.body.phone;
  if (req.body.email) orderIssentials.email = req.body.email;
  if (req.body.deliverydate)
    orderIssentials.deliverydate = req.body.deliverydate;

  if (req.body.transportationtype)
    orderIssentials.transportationtype = req.body.transportationtype;
  if (req.body.password) orderIssentials.password = req.body.password;
  if (req.body.paymentmethod)
    orderIssentials.paymentmethod = req.body.paymentmethod;
  if (req.body.note) orderIssentials.note = req.body.note;

  //android based transaction
  if (!isAndroid) {
    orderIssentials.transaction = {};
    orderIssentials.transaction.from = {};
    orderIssentials.transaction.to = {};
    if (req.body.method) orderIssentials.transactionmethod = req.body.method;

    if (req.body.from) orderIssentials.transaction.from.account = req.body.from;
    if (req.body.to) orderIssentials.transaction.to.account = req.body.to;
  }

  Order.create(orderIssentials, (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      req.session.cart = null;
      res.json(orders);
    }
  });
});

//@route GET api/order
//@desc test order route
//access public
router.post("/:id", (req, res) => {
  /* Order.findByIdAndUpdate(req.params.id)
    .then(order=>{
        if (req.body.from) orderIssentials.transaction.from.account = req.body.from;
    }) */
});
//@route GET api/order/all
//@desc view all order requests
//access private(pm)
router.get("/all", (req, res) => {
  Order.find({}, function(err, orders) {
    if (err) {
      console.log(err);
    } else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
      });
      res.json(orders);
    }
  });
});
//@route GET api/set-transporter
//@desc set transporter for an order
//access set_transporter
router.get("/set_transporter", (req, res) => {
  User.find({ role: "transporter" }, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("orders/setTransporter", { users: users });
    }
  });
});
//@route GET api/order
//@desc view the person that made an order
//access public
router.get("/user/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);
    else {
      res.render("orders/userOrderList", { user: user });
    }
  });
});

router.get("/set-delivery/:id", (req, res) => {
  const order = {};
  order.order = req.params.id;
  Delivery.create(order, (err, delivery) => {
    if (err) {
      console.log(err);
    } else {
      res.json(delivery);
    }
  });
});
module.exports = router;
