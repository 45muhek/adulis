var mongoose = require("mongoose");
var checkoutSchema = new mongoose.Schema({
  transportationtype: {
    type: String,
    required: true
  },
  totalprice: {
    type: Number
  },
  deliveryAdress: {
    type: String
  }
});

module.exports = mongoose.model("Checkout", checkoutSchema);
