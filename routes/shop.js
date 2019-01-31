/* 46 line has an error fix it! */

var express = require("express");
var router = express.Router();
var Product = require("../models/products"),
  Comment = require("../models/comments");
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

//@route POST api/product/
//@desc  create product
//access private
router.post("/product", function(req, res) {
  //VALIDATION

  req.checkBody("pname", "Product Name field is required").notEmpty();

  req.checkBody("price", "Price field is required").notEmpty();

  req.checkBody("image", "Image field is required").notEmpty();

  req.checkBody("stokeamount", "Stock Ammount field is required").notEmpty();

  req.checkBody("description", "Product Name field is required").notEmpty();

  req.checkBody("manufacturer", "manufacturer field is required").notEmpty();

  req.checkBody("department", "department field is required").notEmpty();

  req.checkBody("new", "new or used field is required").notEmpty();

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
  const producFields = {};
  if (req.body.pname) producFields.pname = req.body.pname;
  if (req.body.price) producFields.price = req.body.price;
  if (req.body.image) producFields.image = req.body.image;
  if (req.body.stokeamount) producFields.stokeamount = req.body.stokeamount;
  if (req.body.description) producFields.description = req.body.description;

  //manufacre information

  producFields.manufacture = {};
  if (req.body.manufacturer)
    producFields.manufacture.manufacturer = req.body.manufacturer;
  if (req.body.model_number)
    producFields.manufacture.model_number = req.body.model_number;
  if (req.body.release_date)
    producFields.manufacture.release_date = req.body.release_date;

  //PRODUCT TAG INFORMATION
  if (typeof req.body.tags != "undefined") {
    producFields.tags = req.body.tags.split(",");
  }

  //DEPARTMAENT AND ADDITIONAL INFORMATION

  if (req.body.department)
    producFields.department.department = req.body.department;
  if (req.body.size) producFields.department.size = req.body.size;
  if (req.body.modelno) producFields.department.modelno = req.body.modelno;
  if (req.body.new) producFields.department.new = req.body.new;

  if (typeof req.body.colors != "undefined") {
    producFields.department.colors = req.body.colors.split(",");
  }

  Product.create(producFields, function(err, product) {
    if (err) {
      console.log(err);
    } else {
      res.json(product);
    }
  });
});

router.get("/productcatalogue/:id", function(req, res) {
  Product.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundProduct) {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        var comment_count = foundProduct.comments.length;

        res.render("products/single-product", {
          product: foundProduct,
          comment_count: comment_count
        });
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
    console.log(req.session.cart);
    res.redirect("/productcatalogue");
  });
});

//COMMETNTS
router.get("/productcatalogue/:id/add-comments", function(req, res) {
  //FIND PRODUCT BY ID
  Product.findById(req.params.id, function(err, product) {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", { product: product });
    }
  });

  router.post("/product/:id/comments", function(req, res) {
    Product.findById(req.params.id, function(err, product) {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        Comment.create(req.body.comment, function(err, comment) {
          if (err) console.log(err);
          else {
            /* req.flash("success", "your comment has been posted"); */
            product.comments.push(comment);
            product.save();
            console.log("saved");
            res.redirect("/productcatalogue/" + product._id);
          }
        });
      }
    });
  });
});

//RATTING
router.post("/product/rate", (req, res) => {
  var id = req.body.rating.pid;

  Product.findByIdAndUpdate(id)
    .then(rate => {
      if (req.body.rating.five) {
        rate.rating.five = rate.rating.five * 1 + 1;
      }
      if (req.body.rating.four) {
        rate.rating.four = rate.rating.four * 1 + 1;
      }
      if (req.body.rating.three) {
        rate.rating.three = rate.rating.three * 1 + 1;
      }
      if (req.body.rating.two) {
        rate.rating.two = rate.rating.five * 1 + 1;
      }
      if (req.body.rating.one) {
        rate.rating.one = rate.rating.one * 1 + 1;
      }
      var all =
        rate.rating.one +
        rate.rating.two +
        rate.rating.three +
        rate.rating.four +
        rate.rating.five;
      var avr =
        ((rate.rating.one +
          rate.rating.two * 2 +
          rate.rating.three * 3 +
          rate.rating.four * 4 +
          rate.rating.five * 5) *
          1) /
        all;
      rate.rating.averge = avr;
      console.log("go 2 sleep ", avr);
      rate.save();
    })

    .catch(err => console.log(err));

  res.redirect("/productcatalogue/" + id);
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}
router.get("/shopping-cart", function(req, res) {
  if (!req.session.cart) {
    return res.render("products/shopping-cart", { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render("products/shopping-cart", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

module.exports = router;
