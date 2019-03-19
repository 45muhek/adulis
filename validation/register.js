const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = "Firstname must be between 2 and 30 chearacters";
  }
  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "Firstname must be between 2 and 30 chearacters";
  }
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "lastname field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalYid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be atleast 6 characters";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password field is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
