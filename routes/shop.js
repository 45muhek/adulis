/* 46 line has an error fix it! */

var express = require("express");
var router = express.Router();
var Product = require("../models/products"),
  Comment = require("../models/comments");
Cart = require("../models/cart");

router.get("/productcatalogue", function (req, res) {
  Product.find({}, function (err, allProducts) {
    if (err) {
      console.log(err);
    } else {

      res.render("products/productcatalogue", { allProducts, allProducts });
    }
  });
});
router.post("/productcatalogue", function (req, res) {
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

  Product.create(newProduct, function (err, newlyAdded) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("productcatalogue");
    }
  });
});
router.get("/productcatalogue/new", function (req, res) {
  res.render("products/new");
});

router.get("/productcatalogue/:id", function (req, res) {
  Product.findById(req.params.id)
    .populate("comments")
    .exec(function (err, foundProduct) {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        console.log(foundProduct);
        var comment_count = foundProduct.comments.length;

        res.render("products/single-product", { product: foundProduct, comment_count: comment_count });
      }
    });
});

//CART ROUTES

router.get("/add-to-cart/:id", function (req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {}); //pass the cart if it exist or empity if it doesnt
  Product.findById(productId, function (err, product) {
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
router.get("/productcatalogue/:id/add-comments", function (req, res) {
  //FIND PRODUCT BY ID
  Product.findById(req.params.id, function (err, product) {
    if (err) {
      console.log(err);
    }
    else {
      res.render("comments/new", { product: product })
      console.log(product);
    }
  })

  router.post("/product/:id/comments", function (req, res) {

    Product.findById(req.params.id, function (err, product) {
      if (err) {


        console.log(err);
        res.redirect("/");
      } else {


        Comment.create(req.body.comment, function (err, comment) {
          if (err)
            console.log(err)
          else {

            /* req.flash("success", "your comment has been posted"); */
            product.comments.push(comment);
            product.save();
            console.log("saved");
            res.redirect("/productcatalogue/" + product._id);
          }
        })
      }

    })
  })

})

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
      var all = rate.rating.one + rate.rating.two + rate.rating.three
        + rate.rating.four + rate.rating.five
      var avr = (rate.rating.one + rate.rating.two * 2 + rate.rating.three * 3
        + rate.rating.four * 4 + rate.rating.five * 5) * 1 / all
      rate.rating.averge = avr;
      console.log("go 2 sleep ", avr);
      rate.save()

    })

    .catch(err => console.log(err))

  res.redirect("/productcatalogue/" + id)


})


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
