const userModel1 = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPhone: {
      type: DataTypes.INTEGER,
    },
    userAddress: {
      type: DataTypes.STRING,
    },
  });
  return user;
};
module.exports = userModel1;
