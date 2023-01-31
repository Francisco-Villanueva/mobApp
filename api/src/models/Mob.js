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
      defaultValue: "Ally",
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "Blue",
    },
    mobtype: {
      type: DataTypes.STRING,
      defaultValue: "Zombie",
    },
    life: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
  });
};
