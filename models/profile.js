var mongoose = require("mongoose");
var ProfileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    request: {
        type: String
    },
    interests: {
        type: [String]
    },
    perchasehistory: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            perchasedate: {
                type: Date
            }

        }
    ]

})
module.exports = mongoose.model("Profile", ProfileSchema);
