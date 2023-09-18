const User = require("../database/userModel");

const getAllusers = async () => {
  try {
    const users = await await User.findAll();
    return users;
  } catch (error) {
    throw {status: 500, message: error?.message || error};
  }
};

const getOneuser = async (userId) => {
    try {
        const user = await User.findOne({where: { id: userId }})

        if(!user) {
            throw { status: 404, message: `user with id ${userId} not found` }
        }

        return user
    } catch (error) {
        throw {status: 500, message: error?.message || error};
    }
};

const createNewuser = async (userBody) => {
    try {
        const buildedUser = User.build(userBody)
        const createdUser = await buildedUser.save()
        return createdUser
    } catch (error) {
        throw {status: 500, message: error?.message || error};
    }
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
