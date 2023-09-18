const { body } = require("express-validator");

// This is used to validate the document_number (It can only be 7 digits long)
const isSevenDigitNumeric = (value) => {
  return /^\d{7}$/.test(value);
};

// This is used to validate the date of birth (YYYY-MM-DD)
const isValidDateFormat = (value) => {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  return dateFormat.test(value);
};

const updateUserValidationSchema = [
  body("first_name")
    .isString()
    .withMessage("First name must be a string")
    .notEmpty()
    .withMessage("First name is required")
    .optional(),
  body("second_name")
    .isString()
    .withMessage("Second name must be a string")
    .notEmpty()
    .withMessage("Second name can not be empty")
    .optional(),
  body("last_name")
    .isString()
    .withMessage("Last name must be a string")
    .notEmpty()
    .withMessage("Last name is required")
    .optional(),
  body("second_last_name")
    .isString()
    .withMessage("Second last name must be a string")
    .notEmpty()
    .withMessage("Second last name is required")
    .optional(),
  body("date_of_birth").custom((value) => {
    if (!isValidDateFormat(value)) {
      throw new Error("Invalid format. Please enter a valid date YYYY-MM-DD");
    }
    return true;
  })
  .optional(),
  body("email")
    .isEmail()
    .withMessage("Email must be a valid email")
    .notEmpty()
    .withMessage("Email is required")
    .optional(),
  body("document_number").custom((value) => {
    if (!isSevenDigitNumeric(value)) {
      throw new Error("Invalid format. Please enter a 7-digit number.");
    }
    return true;
  })
  .optional(),
  body("salary")
    .isDecimal()
    .withMessage("First name must be a string")
    .notEmpty()
    .withMessage("Salary is required")
    .optional()
];

module.exports = updateUserValidationSchema;
