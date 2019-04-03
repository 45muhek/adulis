var mongoose = require("mongoose");
var deliverySchema = new mongoose.Schema({
  transporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  },
  report: {
    reporttype: {
      type: String
    },
    reportbody: {
      type: String
    }
  }
});

module.exports = mongoose.model("Delivery", deliverySchema);
