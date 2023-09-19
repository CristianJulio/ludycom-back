const { validationResult } = require("express-validator");
const usersService = require("../services/usersService");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await usersService.getAllusers();
    res.json({ status: "OK", data: allUsers });
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneUser = async (req, res) => {
  const document_number = req.params["document_number"];

  try {
    const user = await usersService.getOneuser(document_number);
    res.json({ status: "OK", data: user });
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewUser = async (req, res) => {
  const userBody = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ status: "FAILED", message: { error: errors.array() } });
    }

    const createduser = await usersService.createNewuser(userBody);
    res.json({ status: "OK", data: createduser });
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneUser = async (req, res) => {
  const document_number = req.params["document_number"];

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ status: "FAILED", message: { error: errors.array() } });
    }

    await usersService.updateOneUser(req.body, document_number);
    res.json({ status: "OK", data: `User with Doc. number ${document_number} updated` });
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneUser = async (req, res) => {
  const document_number = req.params["document_number"];

  try {
    await usersService.deleteOneuser(document_number);
    res.json({
      status: "OK",
      data: { message: `User with id ${document_number} deleted` },
    });
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getCount = async (req, res) => {
  try {
    const count = await usersService.getCount()
    res.json({ status: 'ok', data: count })
  } catch (error) {
    res.status(500).json({ status: "FAILED", data: { error: error?.message || error } });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  getCount
};
