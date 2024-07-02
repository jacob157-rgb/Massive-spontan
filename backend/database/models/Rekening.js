import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Rekening = sequelize.define(
    "rekening",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      no_rek: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama_bank: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama_pemilik: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kantor_cabang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Rekening;
};
