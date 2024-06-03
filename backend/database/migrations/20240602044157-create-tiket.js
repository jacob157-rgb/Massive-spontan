"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "tiket",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        nama: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        kategori: {
          type: Sequelize.ENUM("paid", "free"),
          allowNull: false,
        },
        harga: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        deskripsi: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        stok: {
          type: Sequelize.INTEGER,
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
        isPublish: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tiket");
  },
};
