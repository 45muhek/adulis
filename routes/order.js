var express = require("express");
var router = express.Router();
var Order = require("../models/order"),
  User = require("../models/users");

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

router.get("/view", (req, res) => {
  Order.find({ user: req.user }, (err, orders) => {
    if (err) console.log(err);
    else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
      });
      res.render("products/order", { orders: orders });
    }
  });
});
//@route GET api/order
//@desc test order route
//access public
router.post("/", (req, res) => {
  //INITIALIZING

  const orderIssentials = {};
  const isAndroid = false;
  var sessionCart = new Cart(req.session.cart);

  //SETTING CART TO THE ORDER CART
  orderIssentials.cart = sessionCart;
  //SETTING USER TO AN ORDER
  orderIssentials.user = req.user;

  if (req.body.name) orderIssentials.name = req.body.name;
  if (req.body.deliveryadress)
    orderIssentials.deliveryadress = req.body.deliveryadress;
  if (req.body.phone) orderIssentials.phone = req.body.phone;
  if (req.body.deliverydate)
    orderIssentials.deliverydate = req.body.deliverydate;

  if (req.body.transportationtype)
    orderIssentials.transportationtype = req.body.transportationtype;

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
      res.redirect("/productcatalogue");
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
      res.render("products/orders", { orders, orders });
    }
  });
});

router.get("/set_transporter", (req, res) => {
  User.find({ role: "transporter" }, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("orders/setTransporter", { users: users });
    }
  });
});

router.get("/user/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);
    else {
      res.render("orders/userOrderList", { user: user });
    }
  });
});

router.get("/asign_transporter:id",(req,res)=>{

})
module.exports = router;
