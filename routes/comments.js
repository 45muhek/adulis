var express= require("express");
var router= express.Router();

//Comments route
//==============

router.get("/productcatalogue/:id/comments/new", function (req, res) {

    //find product by id
    Product.findById(req.params.id, function (err, product) {
        if (err)
            console.log(err)
        else {
            res.render("comments/new", { product: product });
        }
    })

})


router.post("/productcatalogue/:id/comments", function (req, res) {

    Product.findById(req.params.id, function (err, product) {
        if (err) {
            console.log(err)
            res.redirect("/productcatalogue");

        }
        else {

            Comment.create(req.body.comment, function (err, comment) {
                if (err)
                    console.log(err)
                else {
                    product.comments.push(comment);
                    product.save();
                    res.redirect('/productcatalogue/' + product._id);
                }
            })

        }
    })
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("error", "You must be logged in first!")
    res.redirect("/");
}
module.exports=router;