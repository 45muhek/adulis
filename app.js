var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express(),
  expressSanitizer = require("express-sanitizer"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  Product = require("./models/products"),
  Comment = require("./models/comments"),
  session = require("express-session"),
  flash = require("connect-flash");

mongoose.connect("mongodb://127.0.0.1/adulisdb");
require("./config/passport");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "God bless Ethiopia",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//routes
var shopeRoutes = require("./routes/shop"),
  commentRoutes = require("./routes/comments"),
  userRoutes = require("./routes/user"),
  indexRoutes = require("./routes/index");

//PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "god bless Ethiopia",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(shopeRoutes);
//app.use(userRoutes);
app.use(indexRoutes);
app.use(commentRoutes);

app.listen("3000", function() {
  console.log("Adulis server running!");
});
