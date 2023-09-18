const { validationResult, body } = require("express-validator");
const usersService = require("../services/usersService");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await usersService.getAllusers();
    res.json({ status: "OK", data: allUsers });
  } catch (error) {
    res.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneUser = async (req, res) => {
  const userid = req.params["userId"];

  try {
    const user = await usersService.getOneuser(userid);
    res.json({ status: "OK", data: user });
  } catch (error) {
    res.json({ status: "FAILED", data: { error: error?.message || error } });
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
    res.json({ status: "FAILED", message: { error: error?.message || error } });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ status: "FAILED", message: { error: errors.array() } });
    }

    const updateduser = await usersService.updateOneuser(
      req.body,
      req.params["userId"]
    );
    res.json({ status: "OK", data: updateduser });
  } catch (error) {
    res.json({ status: "FAILED", message: { error: error?.message || error } });
  }
};

const deleteOneUser = async (req, res) => {
  const userId = req.params["userId"];

  try {
    await usersService.deleteOneuser(userId);
    res.json({
      status: "OK",
      data: { message: `User with id ${userId} deleted` },
    });
  } catch (error) {
    res.json({ status: "FAILED", message: { error: error?.message || error } });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
