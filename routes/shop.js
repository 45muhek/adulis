var express = require("express");
var router = express.Router();
var Product = require("../models/products"),
  Comments = require("../models/comments");
Cart = require("../models/cart");

router.get("/productcatalogue", function(req, res) {
  Product.find({}, function(err, allProducts) {
    if (err) {
      console.log(err);
    } else {
      res.render("products/productcatalogue", { allProducts, allProducts });
    }
  });
});
router.post("/productcatalogue", function(req, res) {
  var pname = req.body.pname;
  var manu = req.body.manu;
  var price = req.body.price;
  var image = req.body.pic;
  var desc = req.body.desc;

  var newProduct = {
    pname: pname,
    manu: manu,
    image: image,
    price: price,
    description: desc
  };

  Product.create(newProduct, function(err, newlyAdded) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("productcatalogue");
    }
  });
});
router.get("/productcatalogue/new", function(req, res) {
  res.render("products/new");
});

router.get("/productcatalogue/:id", function(req, res) {
  Product.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundProduct) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.render("products/single-product", { product: foundProduct });
      }
    });
});

//CART ROUTES

router.get("/add-to-cart/:id", function(req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {}); //pass the cart if it exist or empity if it doesnt
  Product.findById(productId, function(err, product) {
    if (err) {
      console.log(err);
      return res.redirect("/productcatalogue");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart.totalPrice);
    res.redirect("/productcatalogue");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}

module.exports = router;
