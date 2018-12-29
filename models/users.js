var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  googleid:String,
  facebookid:String
});
UserSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
//UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
