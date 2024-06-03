'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("rekening",
    {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      no_rek: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama_bank: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama_pemilik: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kantor_cabang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kota: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("rekening");
  }
};
