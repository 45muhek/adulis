const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateProductInput(data) {
  let errors = {};

  data.pname = !isEmpty(data.pname) ? data.pname : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.stokeamount = !isEmpty(data.stokeamount) ? data.stokeamount : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.manufacturer = !isEmpty(data.manufacturer) ? data.manufacturer : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.new = !isEmpty(data.new) ? data.new : "";

  if (Validator.isEmpty(data.pname)) {
    errors.pname = "product name field is required";
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = "product price field is required";
  }
  if (Validator.isEmpty(data.image)) {
    errors.image = "product image field is required";
  }
  if (Validator.isEmpty(data.stokeamount)) {
    errors.stokeamount = " stokeamount field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = " description field is required";
  }
  if (Validator.isEmpty(data.manufacturer)) {
    errors.manufacturer = " manufacturer field is required";
  }
  if (Validator.isEmpty(data.department)) {
    errors.department = " department field is required";
  }
  if (Validator.isEmpty(data.new)) {
    errors.new = " new or used field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
