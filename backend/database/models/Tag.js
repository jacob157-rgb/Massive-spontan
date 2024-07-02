import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Tag = sequelize.define(
    "tag",
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Tag;
};
