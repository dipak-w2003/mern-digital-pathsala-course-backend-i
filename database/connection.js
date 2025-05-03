// database connection code/logic
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.cs);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

module.exports = db;
