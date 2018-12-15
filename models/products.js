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
    ]
});

module.exports = mongoose.model("Product", adulisSchema);