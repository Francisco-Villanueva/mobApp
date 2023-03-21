const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("mob", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
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
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    life: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
  });
};
