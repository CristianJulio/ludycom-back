const { DataTypes } = require("sequelize");
const sequelize = require("./db")

const User = sequelize.define('user', {
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  second_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  date_of_birth: {
    type: DataTypes.DATE
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  document_number: {
    type: DataTypes.INTEGER(7),
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

(async () => { await sequelize.sync({ force: true }); })();

module.exports = User