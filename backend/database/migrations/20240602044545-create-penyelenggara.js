"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "penyelenggara",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        id_user: {
          type: Sequelize.BIGINT,
          references: {
            model: "Users",
            key: "id",
          },
        },
        id_rekening: {
          type: Sequelize.BIGINT,
          references: {
            model: "Rekening",
            key: "id",
          },
        },
        banner: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        logo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nama_penyelenggara: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tentang_kami: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        featured_event: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        sosmed: {
          type: Sequelize.JSON,
          allowNull: true,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("penyelenggara");
  },
};
