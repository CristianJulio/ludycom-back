const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db"); // Your Sequelize instance
const Area = require("./areaModel"); // Import the User model

console.log("Area", Area.toString())

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
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    document_number: {
      type: DataTypes.INTEGER(7),
      primaryKey: true,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2)
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "user",
  }
);

// (async () => { await sequelize.sync({ force: true }); })();

User.hasMany(Area, { as: 'areas' });


module.exports = User;