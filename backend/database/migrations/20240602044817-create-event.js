"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "event",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        id_format: {
          type: Sequelize.BIGINT,
          references: {
            model: "Format",
            key: "id",
          },
        },
        id_topik: {
          type: Sequelize.BIGINT,
          references: {
            model: "Topik",
            key: "id",
          },
        },
        id_cp: {
          type: Sequelize.BIGINT,
          references: {
            model: "CP",
            key: "id",
          },
        },
        nama: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        banner: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mulai: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        berakhir: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        tipe: {
          type: Sequelize.ENUM("online", "offline"),
          allowNull: false,
        },
        visibilitas: {
          type: Sequelize.ENUM("public", "private"),
          allowNull: false,
        },
        url: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pinpoint: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        tempat: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        deskripsi: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        fasilitas: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        snk: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        isPublish: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("event");
  },
};
