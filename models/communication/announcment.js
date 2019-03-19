var mongoose = require("mongoose");
var announcmentSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Annoncmnet", announcmentSchema);
