// database connection code/logic
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.cs);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
(db.Sequelize = Sequelize),
  (db.sequelize = sequelize), 
  (db.books = require("./models/book.model")(sequelize, DataTypes));
db.users = require("./models/user.model")(sequelize, DataTypes);
db.products = require("./models/product.model")(sequelize, DataTypes);
// migrate code / database
sequelize.sync({ alter: false }).then(() => {
  console.log("database has been migrated");
});
module.exports = db;
