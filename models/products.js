var mongoose = require("mongoose")
var adulisSchema = new mongoose.Schema({
    pname: String,
    price: String,
    manufacturer: String,
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
    }

});

module.exports = mongoose.model("Product", adulisSchema);