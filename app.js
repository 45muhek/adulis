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
  flash = require("connect-flash"),
  validator = require("express-validator"),
  MongoStore = require("connect-mongo")(session);

//mongoose setup
mongoose.connect("mongodb://127.0.0.1/adulisdb");

require("./config/passport");
require("./config/passport-google-auth");

//initializing routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "God bless Ethiopia",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//routes init
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

//AUTHENTICATION CHECK
app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session; //setting session to a user
  next();
});


//ROUTES
app.use("/user", userRoutes);
app.use(shopeRoutes);
app.use(indexRoutes);
app.use(commentRoutes);

app.listen("3000", function() {
  console.log("Adulis server running!");
});
