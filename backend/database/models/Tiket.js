import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Tiket = sequelize.define(
    "tiket",
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
      kategori: {
        type: DataTypes.ENUM("paid", "free"),
        allowNull: false,
      },
      harga: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mulai: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      berakhir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      isPublish: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Tiket;
};
