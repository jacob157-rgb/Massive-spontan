import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "event",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_format: {
        type: DataTypes.BIGINT,
        references: {
          model: "Format",
          key: "id",
        },
      },
      id_topik: {
        type: DataTypes.BIGINT,
        references: {
          model: "Topik",
          key: "id",
        },
      },
      id_cp: {
        type: DataTypes.BIGINT,
        references: {
          model: "CP",
          key: "id",
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      banner: {
        type: DataTypes.STRING,
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
      tipe: {
        type: DataTypes.ENUM("online", "offline"),
        allowNull: false,
      },
      visibilitas: {
        type: DataTypes.ENUM("public", "private"),
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pinpoint: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tempat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fasilitas: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      snk: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isPublish: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};
