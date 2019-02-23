var express = require("express");
var router = express.Router({ mergeParams: true });

var Product = require("../models/products"),
    Comment = require("../models/comments");



router.delete("/:comment_id", isLoggedIn, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err, product) {
        if (err)
            res.redirect("/")
        else {
            req.flash("success", "comment has been deleted!");
            res.redirect("/productcatalogue/" + req.params.id)
        }
    })
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You must be logged in first!")
    res.redirect("/");
}
module.exports = router;