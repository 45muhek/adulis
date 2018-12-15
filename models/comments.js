var mongoose = require("mongoose")

var commentSchema = mongoose.Schema({
    text: String,
    author: String

})

module.export = mongoose.model("Comment", commentSchema);