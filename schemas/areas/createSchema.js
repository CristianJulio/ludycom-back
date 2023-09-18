const { body } = require("express-validator");

const createValidationSchema = [
  body("code")
    .isInt()
    .withMessage("Code must be a numeric value")
    .notEmpty()
    .withMessage("Code is required"),
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
  body("lider")
    .isNumeric()
    .withMessage("Lider number must be a number")
    .notEmpty()
    .withMessage("Lider number is required"),
  body("status").isEmpty().withMessage("Status is not an allowed property"),
];

module.exports = createValidationSchema