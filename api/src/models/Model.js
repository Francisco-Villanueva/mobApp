const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("model", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    modelname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modeltype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spawnegg: {
      type: DataTypes.STRING,
    },
    green: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
