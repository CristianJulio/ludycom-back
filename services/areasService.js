const { Area, User } = require("../database/models");

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

const getOneArea = async (areaCode) => {
  try {
    const area = await Area.findOne({
      where: { code: areaCode },
      include: { model: User, attributes: ["first_name"] },
    });

    if (!area) {
      throw { status: 404, message: `Area with code ${areaCode} not found` };
    }

    return area;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewArea = async (areaBody) => {
  try {
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

    await Area.update(areaBody, { where: { code: areaCode } });
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
