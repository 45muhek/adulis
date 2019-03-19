var mongoose = require("mongoose");
var paymentSchema = new mongoose.Schema({
  transaction: {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
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

module.exports = mongoose.model("Payment", paymentSchema);
