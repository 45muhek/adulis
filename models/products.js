var mongoose = require("mongoose");
var adulisSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  manufacture: [
    {
      manufacturer: {
        type: String,
        required: true
      },
      model_number: {
        type: String
      },
      release_date: {
        type: String
      }
    }
  ],

  image: {
    type: String,
    required: true
  },

  stokeamount: {
    type: Number
  },
  description: {
    type: String
  },
  view: {
    type: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  department: {
    department: {
      type: String,
      required: true
    },
    colors: [String],
    size: {
      type: String
    },
    modelno: {
      type: String
    },
    new: {
      type: Boolean
    }
  },
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
