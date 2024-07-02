import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Penyelenggara = sequelize.define(
    "penyelenggara",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
      },
      id_rekening: {
        type: DataTypes.BIGINT,
        references: {
          model: "Rekening",
          key: "id",
        },
      },
      banner: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nama_penyelenggara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tentang_kami: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      featured_event: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      sosmed: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Penyelenggara;
};
