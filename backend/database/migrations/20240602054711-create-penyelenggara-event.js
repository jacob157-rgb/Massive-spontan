"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "penyelenggaraevent",
      {
        id_event: {
          type: Sequelize.BIGINT,
          references: {
            model: "Event",
            key: "id",
          },
        },
        id_penyelenggara: {
          type: Sequelize.BIGINT,
          references: {
            model: "Penyelenggara",
            key: "id",
          },
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("penyelenggaraevent");
  },
};
