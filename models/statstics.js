var mongoose = require("mongoose");
var statsticsSchema = new mongoose.Schema({
  visits: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Statstic", statsticsSchema);
