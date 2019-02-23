var mongoose = require("mongoose");
var StoreSchema = new mongoose.Schema({
  user: {
    type: [String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: [String]
  },
  bio: {
    type: String
  },
  description: {
    type: String
  },
  assignedcatagory: {
    type: [String]
  },
  paymentsupport: {
      cbe:{
        type:String
      },
      oro:{
        type:String
      }
  },
  created: {
    type: Date,
    default: Date.now
  },
  expired: {
    type: Date,
    required: true
  },
  website: {
    type: String
  },
  contacts: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    }
  }
});

module.exports = mongoose.model("Store", StoreSchema);
