var express = require("express");
var router = express.Router();
var Checkout = require("../models/checkout"),
  Payment = require("../models/payment");

//@route GET api/checkout/
//@desc  test checkout route
//access public
router.get("/", (req, res) => {
  res.render("products/checkout");
});

router.post("/", (req, res) => {
  //VALIDATION
  req
    .checkBody("transportation", "transportation field is required")
    .notEmpty();
  req.checkBody("deliveyadress", "delivey adress field is required").notEmpty();

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
  checkoutFields = {};
  if (req.body.transportation)
    checkoutFields.transportationtype = req.body.transportation;
  if (req.body.deliveyadress)
    checkoutFields.deliveyadress = req.body.deliveyadress;
  //if cash on deivery is choosen
  //go directly to order
  //else go to payment

  Checkout.create(checkoutFields, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
router.post("/payment", (req, res) => {});

module.exports = router;
