const usersService = require("../services/usersService")

const getAllUsers = (req, res) => {
    const allUsers = usersService.getAllusers()
    res.send("Get all Users");
  };
  
  const getOneUser = (req, res) => {
    const user = usersService.getOneuser()
    res.send("Get an existing User");
  };
  
  const createNewUser = (req, res) => {
    const createduser = usersService.createNewuser
    res.send("Create a new User");
  };
  
  const updateOneUser = (req, res) => {
    const updatedUser = usersService.updateOneuser()
    res.send("Update an existing User");
  };
  
  const deleteOneUser = (req, res) => {
    const deletedUser = usersService.deleteOneuser()
    res.send("Delete an existing User");
  };
  
  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
  };