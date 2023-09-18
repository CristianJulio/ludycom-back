const User = require("../database/userModel")

const getAllusers = async () => {
    return await User.findAll();
  };
  
  const getOneuser = () => {
    return;
  };
  
  const createNewuser = () => {
    return;
  };
  
  const updateOneuser = () => {
    return;
  };
  
  const deleteOneuser = () => {
    return;
  };
  
  module.exports = {
    getAllusers,
    getOneuser,
    createNewuser,
    updateOneuser,
    deleteOneuser,
  };