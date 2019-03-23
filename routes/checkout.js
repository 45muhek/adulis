var express = require("express");
var router = express.Router();
var Checkout = require("../models/checkout"),
  Payment = require("../models/payment"),
  Order = require("../models/order");

const validateCheckoutInput = require("../validation/checkout");
//@route GET api/checkout/
//@desc  test checkout route
//access public
router.get("/", (req, res) => {
  var cart = new Cart(req.session.cart);
  res.render("products/checkout", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.post("/", (req, res) => {
  //VALIDATION
  const { errors, isValid } = validateCheckoutInput(req.body);
  //CHECK VALIDATION
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //GET FIELDS
  checkoutFields = {};

  if (req.body.firstname && req.body.lastname)
    checkoutFields.name = req.body.firstname + req.body.lastname;

  if (req.body.companyname) checkoutFields.companyname = req.body.companyname;
  if (req.body.city) checkoutFields.city = req.body.city;

  if (req.body.deliverytype)
    checkoutFields.deliverytype = req.body.deliverytype;
  if (req.body.phone) checkoutFields.phone = req.body.phone;
  if (req.body.password) checkoutFields.password = req.body.password;
  if (req.body.transportationtype)
    checkoutFields.transportationtype = req.body.transportationtype;
  if (req.body.paymentmethod)
    checkoutFields.paymentmethod = req.body.paymentmethod;

  //if cash on deivery is choosen
  //go directly to order
  //else go to payment
  /* 
  Checkout.create(checkoutFields, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  }); */

  res.json(checkoutFields);
});
router.post("/payment", (req, res) => {});

module.exports = router;
