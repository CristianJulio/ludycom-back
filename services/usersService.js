const { User } = require("../database/models");

const getAllusers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneuser = async (document_number) => {
  try {
    const user = await User.findOne({ where: { document_number } });

    if (!user) {
      throw {
        status: 404,
        message: `user with Doc. number ${document_number} not found`,
      };
    }

    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewuser = async (userBody) => {
  try {
    const buildedUser = User.build(userBody);
    const createdUser = await buildedUser.save();
    return createdUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneUser = async (userBody, document_number) => {
  try {
    // I check if the user exists
    await getOneuser(document_number);

    await User.update(userBody, { where: { document_number } });
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneuser = async (document_number) => {
  try {
    // I check if the user exists
    await getOneuser(document_number);

    await User.destroy({ where: { document_number } });
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
  return;
};

module.exports = {
  getAllusers,
  getOneuser,
  createNewuser,
  updateOneUser,
  deleteOneuser,
};
