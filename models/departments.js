var mongoose = require("mongoose");
var departmentSchema = new mongoose.Schema({
  clothing: [
    {
      colors: [String],
      availablesizes: [
        {
          small: {
            type: Boolean
          },
          medium: {
            type: Boolean
          },
          large: {
            type: Boolean
          },
          extralarge: {
            type: Boolean
          }
        }
      ]
    }
  ],
  shoes: [
    {
      colors: [String],
      size: {
        type: String
      }
    }
  ],
  beauty: {
    type: String
  },
  electronics: {
    colors: [String],
    model_no: {
      type: String
    }
  },
  household: {
    type: String
  },
  kitchen: {
    type: String
  },
  industrial: {
    type: String
  },
  tools: {
    type: String
  },
  fassionaccessory: {
    type: String
  },
  personalcare: {
    type: String
  },
  automotives: [
    {
      colors: [String],
      status: [
        {
          used: {
            type: Boolean
          },
          new: {
            type: Boolean
          }
        }
      ],
      model: {
        type: String
      },
      seats: {
        type: Number
      },
      tiers: {
        type: Number
      },
      transmission: [
        {
          manual: {
            type: Boolean
          },
          automatic: {
            type: Boolean
          }
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Department", departmentSchema);
