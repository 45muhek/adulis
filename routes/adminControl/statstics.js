var express = require("express");
var router = express.Router();
var Product = require("../../models/products"),
  Comment = require("../../models/comments"),
  Cart = require("../../models/cart"),
  Order = require("../../models/order"),
  Income = require("../../models/income"),
  Statstic = require("../../models/statstics");

//@route GET route/adminControl/total-statstics
//@desc view total product views
//access private (admin)
router.get("/total-statstics", (req, res) => {
  var totalViews = 0;
  var Statstics = {
    productViews: 0,
    commentsCount: 0,
    ordersCount: 0,
    totalSells: 0,
    totalInterest: 0,
    totalProducts: 0,
    totalVisits: 0,
    totalActiveUsers: 0
  };
  Product.find({}).then(allProducts => {
    allProducts.forEach(function(product) {
      totalViews = totalViews + product.view * 1;
      console.log(totalViews);
    });
    console.log(totalViews);
    Statstics.productViews = totalViews;
  });
  Comment.count({}, (err, c) => {
    Statstics.commentsCount = c;
  });
  Order.count({}, (err, o) => {
    Statstics.ordersCount = o;
  });
  Order.count({ status: "delivered" }, (err, s) => {
    Statstics.totalSells = s;
  });
  var totalInterest = 0;
  Income.find({}).then(income => {
    income.forEach(function(interest) {
      totalInterest = totalInterest + interest.interest * 1;
    });
    Statstics.totalInterest = totalInterest;
  });

  Product.count({}, (err, p) => {
    Statstics.totalProducts = p;
  });
  Statstic.count({}, (err, v) => {
    Statstics.totalVisits = v;
  });

  var activeUser = [];
  Order.find({}, (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
        var id = 3;
        if (!activeUser.includes(id)) activeUser.push(id);
      });
      console.log(activeUser);
      Statstics.totalActiveUsers = activeUser.length;
      res.json(Statstics);
    }
  });
});

//INDIVIDUAL STATSTICS
//@route GET route/adminControl/views
//@desc view total product views
//access private (admin)
router.get("/product-views", (req, res) => {
  var totalViews = 0;
  Product.find({}).then(allProducts => {
    allProducts.forEach(function(product) {
      totalViews = totalViews + product.view * 1;
    });
    console.log(totalViews);
  });
});
//@route GET route/adminControl/comments
//@desc view total comments count
//access private (admin)
router.get("/comments", (req, res) => {
  Comment.count({}, (err, c) => {
    console.log(c);
  });
});
//@route GET route/adminControl/comments
//@desc view total comments count
//access private (admin)
router.get("/orders", (req, res) => {
  Order.count({}, (err, c) => {
    console.log(c);
  });
});
router.get("/sell", (req, res) => {
  Order.count({ status: "delivered" }, (err, c) => {
    console.log(c);
  });
});
//@route GET route/adminControl/interest
//@desc view total interest
//access private (admin)
router.get("/interest", (req, res) => {
  var totalInterest = 0;
  Income.find({}).then(income => {
    income.forEach(function(interest) {
      totalInterest = totalInterest + interest.interest * 1;
    });
    console.log(totalInterest);
  });
});
//@route GET route/adminControl/interest
//@desc view total interest
//access private (admin)
router.get("/products", (req, res) => {
  Product.count({}, (err, c) => {
    console.log(c);
  });
});
//@route GET route/adminControl/webvisits
//@desc website total visits
//access private (admin)
router.get("/visits", visit, (req, res) => {
  Statstic.count({}, (err, c) => {
    res.json("total visits " + c);
  });
});

router.get("/active-users", (req, res) => {
  var activeUser = [];
  Order.find({}, (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
        var id = order.user.toString();
        if (!activeUser.includes(id)) activeUser.push(id);
      });
      console.log(activeUser);
      res.json("total active users = " + activeUser.length);
    }
  });
});

//@route GET route/adminControl/current-active-users
//@desc website total visits
//access private (admin)
router.get("/current-active-users", (req, res) => {
  User.count({ isOnline: true }, (err, c) => {
    res.json(c);
  });
});

//VISITS MIDDLEWARE

function visit(req, res, next) {
  if (!req.session.visit) {
    visit = {};
    visit.visits = {};
    visit.visits = 1;
    Statstic.create(visit, function(err, visits) {
      if (err) {
        console.log(err);
      } else {
        req.session.visit = "visited";
        console.log("visit ++");
        return next();
      }
    });
  } else if (req.session.visit) return next();
}

module.exports = router;
