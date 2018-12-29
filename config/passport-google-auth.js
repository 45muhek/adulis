var passport = require("passport");
var GoogleStreategy = require("passport-google-oauth20");
var keys = require("./keys");
const User = require("../models/users");

//SERIALIZING FUNCTION
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//DESERIALIZING FUNCTION
passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user){
    done(null,user);
  })
});
passport.use(
  new GoogleStreategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
      //CHECK IF USER ALREADY EXISTS
      User.findOne({ googleid: profile.id }).then(function(currentUser) {
        if (currentUser) {
          //USER ALREDY EXISTS
          console.log("user is" + currentUser);
          done(null, currentUser); //serializing existing user
        } else {
          new User({
            username: profile.displayName,
            googleid: profile.id
          })
            .save()
            .then(function(newUser) {
              console.log("new user created: " + newUser);
              done(null, newUser); //serializing the user
            });
        }
      });
    }
  )
);
