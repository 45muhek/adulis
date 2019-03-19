var mongoose = require("mongoose");
var IncomeSchema = new mongoose.Schema({
  interest: {
    type: String
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Income", IncomeSchema);
