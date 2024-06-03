const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "cp",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_hp: {
        type: DataTypes.STRING(15), // Change to STRING for phone number
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
