const productModel1 = (sequelize, DataTypes) => {
  return sequelize.define("product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productOrderQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productReceiverId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = productModel1;
