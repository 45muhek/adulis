var mongoose = require("mongoose");
var adulisSchema = new mongoose.Schema({
  pname: String,
  price: String,
  manufacture: [
    {
      manufacturer: {
        type: String,
        required: true
      },
      model_number: {
        type: String,
        required: true
      },
      release_date: {
        type: String
      }
    }
  ],
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  rating: {
    averge: {
      type: Number,
      default: 0
    },
    one: {
      type: Number,
      default: 0
    },
    two: {
      type: Number,
      default: 0
    },
    three: {
      type: Number,
      default: 0
    },
    four: {
      type: Number,
      default: 0
    },
    five: {
      type: Number,
      default: 0
    }
  },
  tags: [String],
+
  shipping_details: {
    weight: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    depth: {
      type: String
    }
  }
});

module.exports = mongoose.model("Product", adulisSchema);
