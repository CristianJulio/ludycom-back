const { Area, User } = require("../database/models");
const usersService = require("./usersService");

const getAllAreas = async () => {
  try {
    const areas = await Area.findAll({
      include: { model: User, attributes: ["first_name"] },
    });
    return areas;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneArea = async (code) => {
  try {
    const area = await Area.findOne({
      where: { code },
      include: { model: User, attributes: ["first_name"] },
    });

    if (!area) {
      throw { message: `Area with code ${code} not found` };
    }

    return area;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewArea = async (areaBody, userDocNumber) => {
  try {
    const user = await usersService.getOneuser(userDocNumber);

    if (!user) {
      throw { message: `User with Doc number ${userDocNumber} not found` };
    }

    const buildedArea = Area.build(areaBody);
    const savedArea = await buildedArea.save();
    return savedArea;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneArea = async (areaBody, areaCode) => {
  try {
    // I check if the area exists
    await getOneArea(areaCode);

    const updatedArea = await Area.update(areaBody, {
      where: { code: areaCode },
    });
    return updatedArea;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneArea = async (areaCode) => {
  try {
    // I check if the area exists
    await getOneArea(areaCode);

    await Area.destroy({
      where: {
        code: areaCode,
      },
    });
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllAreas,
  getOneArea,
  createNewArea,
  updateOneArea,
  deleteOneArea,
};
