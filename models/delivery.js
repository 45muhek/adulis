var mongoose = require("mongoose");
var deliverySchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  order: {
    status: {
      //accept,rejected or expiered
      type: String
    },
    requestdate: {
      type: Date,
      default: Date.now
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  },
  paid: {
    type: Boolean,
    default: false
  },
  amount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  transactiontype: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Delivery", deliverySchema);
