const express = require("express");
const usersController = require("../../../controllers/usersController")

const router = express.Router();

router.get("/", usersController.getAllUsers);
  
  router.get("/:userId", usersController.getOneUser);
  
  router.post("/", usersController.createNewUser);
  
  router.put("/:userId", usersController.updateOneUser);
  
  router.delete("/:userId", usersController.deleteOneUser);

module.exports = router;
