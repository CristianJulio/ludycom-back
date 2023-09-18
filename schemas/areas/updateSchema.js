const { body } = require("express-validator");

const updateValidationSchema = [
  body("code")
    .isInt()
    .withMessage("Code must be a numeric value")
    .notEmpty()
    .withMessage("Code is required")
    .optional(),
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required")
    .optional(),
  body("lider")
    .isNumeric()
    .withMessage("Lider number must be a number")
    .notEmpty()
    .withMessage("Lider number is required")
    .optional(),
  body("status").isEmpty().withMessage("Status is not an allowed property"),
];

module.exports = updateValidationSchema