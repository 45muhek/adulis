var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", messageSchema);
