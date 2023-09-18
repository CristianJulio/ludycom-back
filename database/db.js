const Sequelize = require('sequelize');

const sequelize = new Sequelize('ludycom', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// const initialize = async () => {
//   try {
//     await sequelize.sync({ force: true }) // Use { force: true } to drop existing tables on every sync
//     console.log('Database and tables synced.');
//   } catch (error) {
//     console.error('Error syncing database:', error); 
//   }
// }

// initialize();

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize