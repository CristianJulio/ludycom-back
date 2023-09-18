const { validationResult } = require("express-validator");
const areasService = require("../services/areasService");

const getAllAreas = async (req, res) => {
  try {
    const allAreas = await areasService.getAllAreas();
    res.json({ status: "OK", data: allAreas });
  } catch (error) {
    res.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneArea = async (req, res) => {
  const areaCode = req.params["areaCode"];

  try {
    const area = await areasService.getOneArea(areaCode);
    res.json({ status: "OK", data: area });
  } catch (error) {
    res.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewArea = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ status: "FAILED", message: { error: errors.array() } });
    }

    const createdArea = await areasService.createNewArea(req.body, 1234567);
    res.json({ status: "OK", data: createdArea });
  } catch (error) {
    res
      .status(500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneArea = async (req, res) => {
  const areaCode = req.params["areaCode"];

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ status: "FAILED", message: { error: errors.array() } });
  }

  try {
    await areasService.updateOneArea(req.body, areaCode)
    res.json({ status: 'OK', data: `Area with code ${areaCode} updated` })
  } catch (error) {
    res
      .status(500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
}

const deleteOneArea = async (req, res) => {
  const areaCode = req.params["areaCode"];

  try {
    await areasService.deleteOneArea(areaCode);
    res.json({
      status: "OK",
      data: { message: `Area with code ${areaCode} deleted` },
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllAreas,
  getOneArea,
  createNewArea,
  updateOneArea,
  deleteOneArea,
};
