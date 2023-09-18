const Sequelize = require('sequelize');

const sequelize = new Sequelize('ludycom', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize

// const mysql = require('mysql2/promise');
// const { Sequelize } = require("sequelize");

// const DBNAME = process.env.DBNAME

// module.exports = db = {};

// initialize();

// async function initialize() {
//   const connection = await mysql.createConnection({ host: "localhost", port: '3306', user: "root", password: "root" });
//   await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DBNAME}\`;`);
// }
