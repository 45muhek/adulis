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
  companyname: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
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
    required: true
  },
  ordereddate: {
    type: Date,
    default: Date.now
  },
  note: {
    type: String
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
