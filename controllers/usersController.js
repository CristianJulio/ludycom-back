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

  //   console.log(userBody);

  //   res.json(userBody)

  //   return;

  try {
    const createduser = await usersService.createNewuser(userBody);
    res.json({ status: "OK", data: createduser });
  } catch (error) {
    res.json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneUser = (req, res) => {
  const updatedUser = usersService.updateOneuser();
  res.send("Update an existing User");
};

const deleteOneUser = (req, res) => {
  const deletedUser = usersService.deleteOneuser();
  res.send("Delete an existing User");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
