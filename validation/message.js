const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLMessageInput(data) {
  let errors = {};

  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.text = !isEmpty(data.text) ? data.text : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "subject field is required";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }
  if (Validator.isEmpty(data.author)) {
    errors.author = "author field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
