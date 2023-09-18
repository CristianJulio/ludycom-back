const express = require("express");
const areasContoller = require("../../../controllers/areaController");
const createValidationSchema = require("../../../schemas/areas/createSchema");
const updateValidationSchema = require('../../../schemas/areas/updateSchema')

const router = express.Router();

router.get("/", areasContoller.getAllAreas);

router.get("/:areaCode", areasContoller.getOneArea);

router.post("/", createValidationSchema, areasContoller.createNewArea);

router.put("/:areaCode", updateValidationSchema, areasContoller.updateOneArea);

router.delete("/:areaCode", areasContoller.deleteOneArea);

module.exports = router;
