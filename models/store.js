var mongoose = require("mongoose");
var StoreSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
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
    }


})

module.exports = mongoose.model("Store", StoreSchema);