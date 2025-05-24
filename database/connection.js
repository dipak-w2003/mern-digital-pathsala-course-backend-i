// database/connection.js

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.cs); // DB connection string from .env

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log("✅ Database authenticated"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// Create db object to hold all models and Sequelize
const db = {};

// Attach sequelize & class
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register models (capitalize model names)
db.Book = require("./models/book.model")(sequelize, DataTypes);
db.User = require("./models/user.model")(sequelize, DataTypes);
db.Product = require("./models/product.model")(sequelize, DataTypes);

// Sync DB (optional: use `alter: true` in dev only)
sequelize.sync({ alter: false }).then(() => {
  console.log("✅ Database synced");
});

module.exports = db;
