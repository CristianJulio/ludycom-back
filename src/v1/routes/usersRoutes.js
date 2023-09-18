const express = require("express");
const usersController = require("../../../controllers/usersController");
const createValidationSchema = require("../../../schemas/users/createSchema");
const updateUserValidationSchema = require("../../../schemas/users/updateSchema");

const router = express.Router();

router.get("/", usersController.getAllUsers);
  
  router.get("/:userId", usersController.getOneUser);
  
  router.post("/", createValidationSchema, usersController.createNewUser);
  
  router.put("/:userId", updateUserValidationSchema, usersController.updateOneUser);
  
  router.delete("/:userId", usersController.deleteOneUser);

module.exports = router;
