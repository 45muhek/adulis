/* 46 line has an error fix it! */

var express = require("express");
var router = express.Router();
var Product = require("../models/products"),
  Comment = require("../models/comments");
Cart = require("../models/cart");

//@route GET api/productcatalogue
//@desc view all products
//access public
router.get("/products", function(req, res) {
  Product.find({}, function(err, allProducts) {
    const errors = {};
    if (err) {
      res.status(400).json(err);
    } else {
      res.json({ allProducts });
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

  req
    .checkBody("description", "Product description field is required")
    .notEmpty();

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
  producFields.department = {};
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
//@route GET api/productcata;pgue/:id
//@desc view single product
//access public
router.get("/product/:id", function(req, res) {
  Product.findByIdAndUpdate(req.params.id)
    .populate("comments")
    .exec(function(err, foundProduct) {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        /* INCRIMENTING THE NUMBER OF VIEWS */

        const views = foundProduct.view * 1 + 1;
        foundProduct.view = views;
        var comment_count = foundProduct.comments.length;
        foundProduct.save();
        res.json({
          product: foundProduct,
          comment_count: comment_count
        });
      }
    });
});

//CART ROUTES
//@route GET api/add-to-cart/:id
//@desc add a single product to cart
//access public
router.get("/add-to-cart/:id", function(req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {}); //pass the cart if it exist or empity if it doesnt
  Product.findById(productId, function(err, product) {
    if (err) {
      console.log(err);
    }
    cart.add(product, product.id);
    const totalQty = (req.session.cart = cart);
    res.json(totalQty);
  });
});
//@route GET api/shopping-cart
//@desc view cart quantity
//access public
router.get("/cart-total-qty", (req, res) => {
  if (!req.session.cart) res.json("0");
  else if (
    typeof req.session.cart === "undefined" ||
    req.session.cart == null ||
    typeof req.session.cart.totalQty === "undefined"
  ) {
    res.json("0");
  } else {
    const { totalQty } = req.session.cart;
    res.json(totalQty);
  }
});

//@route GET api/shopping-cart
//@desc view cart
//access public
router.get("/shopping-cart", function(req, res) {
  if (!req.session.cart) {
    res.status(400).json("empty cart");
  }
  var cart = new Cart(req.session.cart);
  const cartData = {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  };
  res.json(cartData);
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
  //@route GET api/product/:iid.comments
  //@desc add comments on a product
  //access private
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
//@route GET api/product/rate
//@desc rate a product
//access public
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

router.get("/add-new", (req, res) => {
  res.render("products/new");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}
function isAdmin(req, res) {
  if (req.isAuthenticated()) {
    permission = req.user.role;
    if (permission === "admin") {
      return next();
    }
  }
  console.log("error", "You must be logged in first!");
  res.redirect("/");
}

module.exports = router;
