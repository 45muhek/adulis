var mongoose = require("mongoose");
var ordercSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  cart: {
    type: Object
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  transportationtype: {
    type: String
  },
  totalprice: {
    type: Number
  },
  deliveryadress: {
    type: String
  },
  deliverydate: {
    type: Date,
    default: Date.now
  },

  //PAYMENT
  transaction: {
    from: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      account: {
        type: String
      }
    },
    to: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      account: {
        type: String
      }
    }
  },
  paid: {
    type: Boolean,
    default: false
  },
  transactionmethod: {
    type: String
  },
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Order", ordercSchema);
