const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db"); // Your Sequelize instance

class Area extends Model {}

Area.init(
  {
    code: {
      type: DataTypes.INTEGER(2),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    lider: {
      type: DataTypes.INTEGER(7),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "area",
  }
);

class User extends Model {}

User.init(
  {
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    second_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    second_last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    document_number: {
      type: DataTypes.INTEGER(7),
      primaryKey: true,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

Area.belongsTo(User, { foreignKey: "lider" });
User.hasMany(Area, { foreignKey: 'lider', as: "areas" });

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = {
  User,
  Area,
};
