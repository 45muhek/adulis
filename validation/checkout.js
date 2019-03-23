const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateCheckoutInput(data) {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.streetname = !isEmpty(data.streetname) ? data.streetname : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.deliverydate = !isEmpty(data.deliverydate) ? data.deliverydate : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.transactionmethod = !isEmpty(data.transactionmethod)
    ? data.transactionmethod
    : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "lastname field is required";
  }
  if (Validator.isEmpty(data.streetname)) {
    errors.streetname = "street name field is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "city field is required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone field is required";
  }
  if (Validator.isEmpty(data.deliverydate)) {
    errors.deliverydate = "delivery date field is required";
  }
  if (Validator.isEmpty(data.transactionmethod)) {
    errors.transactionmethod = "payment method is required";
  }

  if (!Validator.isEmpty(data.password)) {
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "password must be atleast 6 characters";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
