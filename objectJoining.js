var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/blog_demo_3");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
})
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

/* Post.create({
    title: "we need to tackle this pt.3",
    content: "we need additional help"
}, function (err, posts) {
    User.findOne({ name: "markov makarov" }, function (err, user) {
        if (err)
            console.log(err)
        else {
            user.post.push(posts);
            user.save(function (err, post) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(post)
                }
            })
        }
    })
})
 */
User.findOne({ name: "markov makarov" }).populate("post").exec(function (err, user) {
    if (err)
        console.log(err)
    else {
        console.log(user)
    }
})