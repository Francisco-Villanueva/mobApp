const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("mob", {
    name: {
      type: DataTypes.STRING,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "ally",
    },
    color: {
      type: DataTypes.STRING,
      // defaultValue: "blue",
    },
    type: {
      type: DataTypes.INTEGER,
      // defaultValue: "zombie",
    },
    life: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
  });
};
