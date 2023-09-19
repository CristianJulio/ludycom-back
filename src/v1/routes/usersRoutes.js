const express = require("express");
const usersController = require("../../../controllers/usersController");
const createValidationSchema = require("../../../schemas/users/createSchema");
const updateValidationSchema = require("../../../schemas/users/updateSchema");

const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get("/count", usersController.getCount)

router.get("/:document_number", usersController.getOneUser);

router.post("/", createValidationSchema, usersController.createNewUser);

router.put("/:document_number", updateValidationSchema, usersController.updateOneUser);

router.delete("/:document_number", usersController.deleteOneUser);


module.exports = router;
