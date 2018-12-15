var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express(),
    expressSanitizer = require("express-sanitizer"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Product = require("./models/products"),
    Comment = require("./models/comments"),
    User = require("./models/users");

mongoose.connect("mongodb://127.0.0.1/adulisdb");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
var shopeRoutes = require("./routes/shop"),
    commentRoutes = require("./routes/comments"),
    userRoutes = require("./routes/user"),
    indexRoutes = require("./routes/index");




//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "god bless Ethiopia",
    resave: false,
    saveUninitialized: false

}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(shopeRoutes);
//app.use(userRoutes);
app.use(indexRoutes);
app.use(commentRoutes);

app.listen("3000", function () {
    console.log("Adulis server running!")
})

