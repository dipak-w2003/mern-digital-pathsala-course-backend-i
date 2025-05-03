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

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

// ? Trigger Our Models / Schema / Tables functions
// 1. Normal trigger -> const bookModel1 = require("./models/book.model") then bookModel1(Args)
// 2. Shorthand trigger  -> require('./models/book.model')(Args)

db.book = require("./models/book.model")(sequelize, DataTypes);
db.user = require("./models/user.model")(sequelize, DataTypes);
db.product = require("./models/product.model")(sequelize, DataTypes);
// migrate code / database
sequelize.sync({ force: false }).then(() => {
  console.log("database has been migrated");
});
module.exports = db;
